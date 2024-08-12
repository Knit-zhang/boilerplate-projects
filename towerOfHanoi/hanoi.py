NUMBER_OF_DISKS = 3
A = list(range(NUMBER_OF_DISKS, 0, -1))
B = []
C = []

def move(n, source, auxiliary, target):
    if n <= 0:
        return

    # move n - 1 disks from source to auxiliary
    move(n - 1, source, target, auxiliary)

    # remove last disk from source and append it to target
    target.append(source.pop())

    # display our progress
    print(A, B, C, '\n')

    # move n - 1 disks from auxiliary to target
    move(n - 1, auxiliary, source, target)

move(NUMBER_OF_DISKS, A, B, C)