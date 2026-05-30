from datetime import datetime

now = datetime.now()
print(now)

# 문자열로 변환
str_now = now.strftime("%Y.%m.%d %H:%M:%S")
print(str_now)

print("year:", now.year)
print("month:", now.month)
print("date:", now.day)
print("hour:", now.hour)
print("minute:", now.minute)
print("second:", now.second)

print(now.weekday())
print(now.isoweekday())