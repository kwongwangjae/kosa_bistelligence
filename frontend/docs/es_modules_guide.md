# 📦 ES Modules (export / import) 완벽 가이드

자바스크립트에서 파일(모듈) 간에 변수, 함수, 클래스 등을 주고받기 위해 사용하는 `export`와 `import`에 대한 문서입니다.

## 1. Default Export (기본 내보내기) - export default
파일이 **"딱 하나의 주요 기능(컴포넌트, 클래스 등)"**을 가질 때 주로 사용합니다. (예: React의 화면 컴포넌트)

### 문법
```javascript
// 모듈 내보내기 (moduleB.js)
const mainFunction = () => { console.log('hello'); }
export default mainFunction;
```
```javascript
// 모듈 가져오기 (index.js)
// 💡 중괄호 없이 아무 이름으로나 가져옵니다
import MyFunction from './moduleB.js'; 
```

### 💡 장단점
| 장점 (Pros) | 단점 (Cons) |
| :--- | :--- |
| **`{ }` 생략 가능**하여 코드가 깔끔해집니다. | 한 파일에 **무조건 딱 1개**만 사용할 수 있습니다. |
| **원하는 이름으로 자유롭게** 가져올 수 있어, 현재 문맥에 가장 어울리는 이름으로 변경하기 쉽습니다. | 가져오는 사람마다 다른 이름을 쓰면(일관성 저하) 프로젝트가 커졌을 때 파악하기 헷갈릴 수 있습니다. |

---

## 2. Named Export (이름 지정 내보내기)
파일 안에 날짜 계산, 숫자 계산 등 **"여러 개의 작은 도구(함수, 변수 묶음)"**가 들어있을 때 주로 사용합니다.

### 문법
```javascript
// 모듈 내보내기 (moduleC.js)
// 💡 필요한 것들 앞에 각각 export를 붙입니다
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```
```javascript
// 모듈 가져오기 (index.js)
// 💡 반드시 내보낸 이름과 동일하게 중괄호 안에 적습니다
import { add, sub } from './moduleC.js';
```

### 💡 장단점
| 장점 (Pros) | 단점 (Cons) |
| :--- | :--- |
| 이름이 강제되므로 **프로젝트 전체에서 일관된 이름**을 사용하게 되어 코드 파악이 수월합니다. | 가져올 때 반드시 원래 이름을 알아야 하고, `{ }` 로 감싸야 합니다. (이름을 바꾸려면 `import { add as CustomAdd }` 처럼 조금 불편합니다.) |
| 에디터(IDE)의 **자동 완성 시스템**과 궁합이 아주 좋습니다. (정확히 그 이름을 찾아서 자동 import 해줌) | |
| 함수가 수백 개여도 내가 쓸 **필요한 것만 딱 골라서 사용**하기 좋습니다. | |

---

## 🔥 실무 사용 팁 (요약)
- **화면(Page)이나 주요 React 컴포넌트** 한 개가 들어있는 파일 ➡ `Default Export`
- **여러 개의 유용한 공통 함수 모음집 (utils.js 등)** ➡ `Named Export`
