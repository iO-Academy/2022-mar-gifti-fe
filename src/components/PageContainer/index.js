import './style.css'

const Index = (props) => {
    return(
    <div className="rootExpander">
        <div className="container">
            <div className="card">
                <div className="pageHeader">
                    <h1 className="pageTitle">Gifti</h1>
                    <div className="lineDivider"></div>
                </div>
                {props.children}

            </div>
        </div>
    </div>
    )
}

export default Index