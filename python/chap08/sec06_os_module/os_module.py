import os

if __name__ == "__main__":
    # 현재 파일 및 현재 폴더의 절대 경로 얻기
    print(__file__)
    print(os.path.abspath("."))
    print(os.getcwd())
    # cwd means -> current working directory 
    print("-"*50)

    # 현재 폴더 안에 있는 파일의 목록 얻기
    files = os.listdir(os.getcwd())
    for file in files:
        abs_path = os.path.join(os.getcwd(), file)
        if os.path.isdir(file):
            print("[DIR]", file)
        else:
            print("file", file)

    print("-"*50)

    # 폴더 생성
    target_dir = os.path.join(os.getcwd(), "dir1", "dir2")
    os.makedirs(target_dir, exist_ok=True)

    # 폴더 삭제 
    if os.path.exists(target_dir):
        os.rmdir(target_dir)
        print("폴더 삭제 완료")

    # 명령어 실행
    os.system("dir")
    
        
