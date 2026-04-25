// [Named Export - 이름 지정 내보내기만 사용하는 예시]
// 이 파일에는 default export (기본 내보내기)가 없고, 모두 이름이 지정된 export만 있습니다.

export const moduleC_var1 = "moduleC_var1_value";

export function moduleC_fun1() {
    console.log("moduleC_fun1() 실행");
}

export const moduleC_fun2 = () => {
    console.log("moduleC_fun2() 실행 (화살표 함수)");
}
