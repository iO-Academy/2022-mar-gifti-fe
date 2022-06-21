import './style.css'

const Form =  () => {
    return (
        <div className="form_container">
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