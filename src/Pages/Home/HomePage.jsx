import { useContext } from "react";
import { AllContext } from "../../hooks/ContextData";
import './Homepage.css';

const HomePage = () => {
    const { user } = useContext(AllContext);





    return (
        <div className="homePageBody ">
            <div className=" container g-lg-1 g-md-0 mb-md-0 mb-3 ">
                <div className=' text-center'>
                </div>
                <div className=" d-md-flex flex-md-row  flex-column  ">
                    <h2>This is Home Page</h2>
                </div>
            </div>
        </div>
    );
};

export default HomePage; 