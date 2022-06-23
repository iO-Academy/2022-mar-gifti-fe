import './ParticipantPageContentStyle.css'

const ParticipantPageContent = () => {
    async function fetchAllParticipants() {
        const eventsId = '62b19bdfa0fff7ad7f39c98a'
        const response = await fetch(`http://localhost:3001/participants/${eventsId}`)
        const participants = await response.json()
        console.log(participants);
    }
    fetchAllParticipants()

    return (
        <>
            <div className="participantsCard__content">
                <div className="card__header">
                    <h2 className="card__title">Mike's Secret Present Giving</h2>
                </div>
                <div className="participants">
                    <div className="participants__content">
                        <div className="participant participant--pastelPurple">
                            <div className="participantIconName--container">
                                <span className="participant__icon">M</span>
                                <p className="participant__name">Mikey Lawrence</p>
                            </div>
                        </div>
                        <div className="participant participant--pastelCoral">
                            <div className="participantIconName--container">
                                <span className="participant__icon">M</span>
                                <p className="participant__name">Mikey Lawrence</p>
                            </div>
                        </div>
                        <div className="participant participant--pastelGreen">
                            <div className="participantIconName--container">
                                <span className="participant__icon">M</span>
                                <p className="participant__name">Mikey Lawrence</p>
                            </div>
                        </div>
                        <button className="btn addParticipantBtn">
                            <p className="addParticipantBtn__text">Add Participant</p>
                            <span className="addParticipantBtn__icon">+</span>
                        </button>
                    </div>
                </div>
                <div className="lobbyButtons">
                    <button className="btn btn--outline">Add new participant</button>
                    <button className="btn btn--primary">Start Gifting</button>
                </div>
            </div>
    </>
    )
}

export default ParticipantPageContent