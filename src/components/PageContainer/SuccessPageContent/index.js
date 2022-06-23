
const SuccessPageContent= () => {
    const urlToCopy = localStorage.getItem('url')
    return (
        <div className="card__content">
            <img className="card__illustration" src = "../gifti_assets/thumbsUp_illustration.svg"/>
            <div className="card__textContent">
                <div className="card__header">
                    <h2 className="card__title"> Heck Yes! </h2>
                    <p className="card__subTitle">Your event is all set up, use the link below to add more participants</p>
                    <button onClick={() => {navigator.clipboard.writeText(urlToCopy)}} className="copy_btn btn btn--primary">Copy Events URL</button>
                </div>
            </div>
        </div>
    )
}

export default SuccessPageContent