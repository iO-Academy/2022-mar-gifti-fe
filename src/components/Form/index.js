import './style.css'

const Form =  () => {
    return (
        <div className="form_container">
            <h1> Let's Get Gifting</h1>
                <p>Input your event name and date to start your Gifti exchange</p>
            <form>
                <label htmlFor="eventName">Event Name:</label>
                <input required type="text" id="eventName" name="eventName" className="form_input"/>
                    <label htmlFor="deadline">Deadline:</label>
                    <input required type="date" id="deadline" name="deadline" className="form_input"/>
                        <input type="submit" value="Get Started" className="submit_button"/>
            </form>
        </div>
    )
}

export default Form