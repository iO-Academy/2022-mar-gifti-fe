

const Form =  () => {
    return (
        <>
            <h1> Let's get Gifting</h1>
                <p>Input your desired setting to start your Gifti</p>
            <form>
                <label htmlFor="eventName">Event Name:</label>
                <input required type="text" id="eventName" name="eventName"/>
                    <label htmlFor="deadline">Deadline:</label>
                    <input required type="date" id="deadline" name="deadline"/>
                        <input type="submit" value="Get Started"/>
            </form>
        </>
    )
}

export default Form