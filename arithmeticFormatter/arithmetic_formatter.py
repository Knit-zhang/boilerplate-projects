def arithmetic_arranger(problems, show_answers=False):
    arranged_problems = ''
    if len(problems) > 5:
        arranged_problems = 'Error: Too many problems.'
        return arranged_problems
    
    # list all the operators in str format
    operations = list(map(lambda x: x.split()[1], problems))
    if len(set(operations)) > 2 or not all(op in {"+", "-"} for op in set(operations)):
        arranged_problems = "Error: Operator must be '+' or '-'."
        return arranged_problems
    
    # list all the nums into a list
    numbers = []
    for i in problems:
        p = i.split()
        numbers.extend([p[0], p[2]])
    
    if not all(map(lambda x: x.isdigit(), numbers)):
        arranged_problems = 'Error: Numbers must only contain digits.'
        return arranged_problems

    if not all(map(lambda x: len(x) < 5, numbers)):
        arranged_problems = 'Error: Numbers cannot be more than four digits.'
        return arranged_problems
    
    top_row = ''
    dashes = ''
    values = list(map(lambda x: eval(x), problems))
    solutions = ''
    for i in range(0, len(numbers), 2):
        space_width = max(len(numbers[i]), len(numbers[i + 1])) + 2
        top_row += numbers[i].rjust(space_width)
        dashes += '-' * space_width
        solutions += str(values[i // 2]).rjust(space_width)
        if i != len(numbers) - 2:
            top_row += ' ' * 4
            dashes += ' ' * 4
            solutions += ' ' * 4
    
    bottom_row = ''
    for i in range(1, len(numbers), 2):
        space_width = max(len(numbers[i - 1]), len(numbers[i])) + 1
        bottom_row += operations[i // 2]
        bottom_row += numbers[i].rjust(space_width)
        if i != len(numbers) - 1:
            bottom_row += ' ' * 4

    if show_answers:
        arranged_problems = '\n'.join((top_row, bottom_row, dashes, solutions))
    else:
        arranged_problems = '\n'.join((top_row, bottom_row, dashes))

    return arranged_problems

print(f'\n{arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])}')
print(f'\n{arithmetic_arranger(["3 + 855", "988 + 40"], True)}')