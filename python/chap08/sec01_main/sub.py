import sub

print(f"__name__ 변수값: {__name__}")

class Member:
    pass

# 모듈 싱글톤
member = Member()

if __name__ == "__name__":
    print("python 명령어로 실행했을 경우에만 실행")