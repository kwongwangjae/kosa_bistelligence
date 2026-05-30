import time

def sum(var1, var2):
    result = 0
    for i in range(var1, var2 + 1):
        result += i
    return result

start = time.time()
print("시작 시간:", start)
print(type(start))

res = sum(1, 100000)
end = time.time()
print("종료 시간:", end)
print("실행 시간: ", end - start)

# 주기적으로 실행하기
while True:
    print("2초 간격으로 출력")
    time.sleep(2)
    break