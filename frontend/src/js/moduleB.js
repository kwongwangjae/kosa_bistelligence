// [Named Export - 이름 지정 내보내기]
// 여러 개를 내보낼 수 있으며, 가져올 때(import) 반드시 이 이름(moduleB_var1)을 그대로 명시해야 합니다.
export const moduleB_var1 = "moduleB_var1_value";

// 마찬가지로 이름을 지정해서 내보내는 함수입니다.
export const moduleB_fun1 = function() {
    console.log("moduleB_fun1() 실행");
}

const moduleB_default = function() {
    console.log("moduleB_default() 실행");
}

// [Default Export - 기본 내보내기]
// 모듈(파일)당 딱 한 번만 사용할 수 있습니다. 파일의 메인이 되는 값을 내보낼 때 사용합니다.
export default moduleB_default;
