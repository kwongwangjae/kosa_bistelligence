# import sub1
# import sub2

from sub1 import fun_a, A
from sub2 import fun_b, B

if __name__ == "__main__":
    # 모듈 안에 정의된 함수
    fun_a()
    fun_b()

    # 모듈의 클래스를 이용해서 객체 생성
    obj_a = A()
    obj_b = B()

    print(obj_a)
    print(obj_b)