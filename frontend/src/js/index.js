// [Default Import]
// export default로 내보낸 객체를 통째로 'moduleA'라는 이름으로 가져옵니다. (중괄호 없음)
import moduleA from "./moduleA.js";


console.log(moduleA);
console.log(moduleA.moduleA_var1);
moduleA.moduleA_fun1();
console.log("");

// [Default Import & Named Import 동시에 하기]
// moduleB_default: export default로 내보낸 것을 가져옴 (이름 자유롭게 지정 가능)
// {moduleB_var1, moduleB_fun1}: 일반 export(Named)로 내보낸 것을 가져옴 (원래 이름과 반드시 똑같아야 함)
import moduleB_default, {moduleB_var1, moduleB_fun1} from "./moduleB.js";
moduleB_default();
console.log(moduleB_var1);
moduleB_fun1();

// ----------------------------------------------------
// [Named Import만 하기]
// moduleC.js에는 default export가 없습니다.
// 따라서 무조건 중괄호 { } 안에 원래 이름을 명시해서 원하는 것만 골라 가져옵니다.
import { moduleC_var1, moduleC_fun1, moduleC_fun2 } from "./moduleC.js";

console.log(moduleC_var1);
moduleC_fun1();
moduleC_fun2();
