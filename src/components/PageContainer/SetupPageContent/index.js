
import Form from "../Form";

const Home = () =>{
    return (
        <div className="card__content">
            <img className="card__illustration" src="../gifti_assets/present_illustration.svg"/>
            <div className="card__textContent">
                <div className="card__header">
                    <h2 className="card__title">Let's Get Gifting</h2>
                    <p>Enter your event name and deadline to start your Gifti exchange.</p>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default Home

