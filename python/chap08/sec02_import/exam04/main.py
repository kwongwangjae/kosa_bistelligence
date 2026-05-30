# import sub1
# import sub2

from sub1 import fun_a as sub1_fun_a , A as AClass
from sub2 import fun_b as sub2_fun_b, B as  BClass

if __name__ == "__main__":
    # 모듈 안에 정의된 함수
    sub1_fun_a()
    sub2_fun_b()

    # 모듈의 클래스를 이용해서 객체 생성
    obj_a = AClass()
    obj_b = BClass()

    print(obj_a)
    print(obj_b)