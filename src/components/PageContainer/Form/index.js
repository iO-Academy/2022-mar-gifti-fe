import './style.css'
import {useEffect, useState} from "react";
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
                let sharingLink = 'http://localhost:3001/' + data.data.id
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
                <input required type="text" id="eventName" name="eventName" className="form_input" value={eventName} onChange={handleNameChange}/>
                    <label htmlFor="deadline">Deadline:</label>
                    <input required type="date" id="deadline" name="deadline" className="form_input" value={deadline} onChange={handleDeadlineChange}/>
                        <input  type="submit" value="Get Started" className="submit_button" />
                {redirect ? <Navigate replace to='/success' />: ''}

            </form>
        </div>
    )
}

export default Form