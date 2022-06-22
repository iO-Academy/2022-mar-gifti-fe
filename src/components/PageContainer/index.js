import './style.css'
import Form from "./Form";
import Home from "./SetupPageContent";
import SuccessPageContent from "./SuccessPageContent";

const Index = (props) => {
    return(
    <div className="card">
        <div className="pageHeader">
            <h1 className="pageTitle">Gifti</h1>
            <div className="lineDivider"></div>
        </div>
        {props.children}

    </div>
    )
}

export default Index