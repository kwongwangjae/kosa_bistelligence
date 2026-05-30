import sys
print(sys.builtin_module_names)

print("-"*30)

for path in sys.path:
    print(path)

# sys.path에 없는 경로에 있는 모듈(스크립트 파일)을 import할 경우
# sys.path에 경로를 추가한 후에 사용
sys.path.append("../")
import my
my.fun()