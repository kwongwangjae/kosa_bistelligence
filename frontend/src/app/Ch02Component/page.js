import Image from "next/image";
import ChildComponentC from "../common/ChildComponentC";

function Ch02Component() {
    
    const name = "김경원";
    
    const fun = () => {
        return "fun() 실행 결과";
    };  

    const imageFile = "/react-logo.svg";
    
    return (
        <div className="card mt-2">
            <div className="card-header">
                Ch02Component
            </div>
            <div className="card-body">
                <ChildComponentC />
                <div className="mt-2">
                    <p>
                        변수값: {name}
                    </p>
                    <p>
                        연산식: {2 + 3}
                    </p>
                    <p>
                        함수호출: {fun()}
                    </p>
                    <p>
                        {
                            <Image src={imageFile} width={50} height={50} alt="" className="align-middle" />
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Ch02Component;   