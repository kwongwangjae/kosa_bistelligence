import style from "./style.module.css";

function Exam05ExternalCss(){
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam05ExternalCss Header
            </div>
            <div className="card-body">
                Exam05ExternalCss Body
            </div>

            {/* module.css 방식 */}
            <div className={`mt-3 ${style.wrapper}`}>
                Hello React 1
            </div>

            <div className={`mt-3 ${style.wrapper} ${true?style.inverted:""}`}>
                Hello React 2
            </div>

        </div>
    );
}

export default Exam05ExternalCss;