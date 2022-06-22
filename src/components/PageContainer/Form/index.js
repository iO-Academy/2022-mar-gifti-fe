import './style.css'
import {useState} from "react";
import {Navigate} from "react-router-dom";


const Form =  () => {
    const [eventName, setEventName] = useState('')
    const [deadline, setDeadline] = useState('')
    const [redirect, setRedirect]  = useState(false)

    const handleNameChange = (e) => {
        setEventName(e.target.value)
    }

    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value)
    }

    const sendData = async (eventName, deadline) => {
       let dataToSend = {event_name:eventName, deadline: deadline}
        console.log(JSON.stringify(dataToSend))

        await fetch('http://localhost:3000/events', {
            method:'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
            .then(res => res.json())
            .then(data => {
                setRedirect(true)
                let sharingLink = window.location.host + '/' + data.data.id
                localStorage.setItem('url', sharingLink)
            })
    }

const clickSubmit = (e) => {
        e.preventDefault()
        sendData(eventName, deadline)
}

    return (
        <div className="form_container">
            <form onSubmit={clickSubmit}>
                <label htmlFor="eventName">Event Name:</label>
                <input required type="text" id="eventName" className="form_input" name="eventName" value={eventName} onChange={handleNameChange}/>
                <label htmlFor="deadline">Deadline:</label>
                <input required type="date" id="deadline" className="form_input" name="deadline" value={deadline} onChange={handleDeadlineChange}/>
                <input type="submit" value="Get Started" className="submit_button"/>
                {redirect ? <Navigate replace to='/success'/>: ''}
            </form>
        </div>
    )
}

export default Form