import sys

if __name__ == "__main__":
    # 표준 출력
    sys.stdout.write("콘솔에 출력\n")
    # 표준 에러 출력
    sys.stderr.write("에러 출력\n")
    # 표준 입력
    # line = sys.stdin.readline()
    line = input()
    print("입력 내용: ", line)

    
