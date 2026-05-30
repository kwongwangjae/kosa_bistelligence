from random import random
import math 

random.seed(1)

def circle_area(r:float) -> float:
    return math.pi * r ** 2
print(circle_area(3))


print(math.ceil(2.3))

print(math.floor(2.3))

print(round(2.3))

# 실수 난수 ([0.0 ~ 1.0]) 얻기
print(random.random())