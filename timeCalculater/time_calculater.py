def get_days_later(days):
    if days == 1:
        return '(next day)'
    elif days > 1:
        return f'({days} days later)'
    return ""

def add_time(start, duration, startingDay=''):
    # list weeks and periods
    WEEKS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    # split time format hour:minute
    stime, period = map(lambda x: x.strip(), start.split())
    dhour, dminute = map(lambda x: int(x), duration.split(':'))
    shour, sminute = map(lambda x: int(x), stime.split(':'))

    # total hours & minutes
    total_minute = sminute + dminute
    total_hour = shour + dhour
    days_later = 0

    # shift minutes and turn 12-clock into 24-clock

    if total_minute >= 60:
        total_hour += total_minute // 60
        total_minute = total_minute % 60

    if period == "PM":
        total_hour += 12

    if dhour or dminute:
        days_pass = total_hour // 24
        if days_pass:
            days_later += days_pass
    
    new_hour = total_hour % 24
    if new_hour >= 12:
        period = 'PM'
        if new_hour > 12:
            new_hour -= 12
    else:
        period = 'AM'
        if new_hour == 0:
            new_hour = 12
    
    formatted_time = f"{new_hour}:{total_minute:02}"
    if startingDay:
        day_index = WEEKS.index(startingDay.capitalize())
        period += ", "
        period += WEEKS[(day_index + days_later) % len(WEEKS)]
        
    result =  " ".join([formatted_time, period, get_days_later(days_later)])
    print(result.strip())
    return result.strip()

add_time('3:00 PM', '3:10')
# Returns: 6:10 PM
# shour = 3 dhour = 3, sminute = 0, dminute = 10
# total_hour = 6, total_minute = 10

add_time('11:30 AM', '2:32', 'Monday')
# Returns: 2:02 PM, Monday
# total_hour = 14, total_minute = 2

add_time('11:43 AM', '00:20')
# Returns: 12:03 PM
# total_hour = 12, total_minute = 03

add_time('10:10 PM', '3:30')
# Returns: 1:40 AM (next day)
# total_hour = 13, total_minute = 40

add_time('11:43 PM', '24:20', 'tueSday')
# Returns: 12:03 AM, Thursday (2 days later)

add_time('6:30 PM', '205:12')
# Returns: 7:42 AM (9 days later)

add_time('3:30 PM', '2:12')
# Returns: 5:42 PM

add_time('11:55 AM', '3:12')
# Returns: 3:07 PM

add_time('8:16 PM', '466:02', 'tuesday')
# Returns: 6:18 AM, Monday (20 days later)