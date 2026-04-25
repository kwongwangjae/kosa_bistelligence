const moduleA_var1 = "moduleA_var1_value";

const moduleA_fun1 = function() {
    console.log("moduleA_fun1() 실행");
};

// [Default Export - 기본 내보내기]
// 변수와 함수를 하나의 객체(Object)로 묶어서 통째로 내보냅니다.
export default {
    moduleA_var1, moduleA_fun1
};
