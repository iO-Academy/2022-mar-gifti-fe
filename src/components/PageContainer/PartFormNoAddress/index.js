import {useState} from "react";

const PartFormNoAddress = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }


    const clickSubmit = (e) => {
        e.preventDefault()
        if(validateName() && validateEmail()) {
            sendData(name, email)
        }
    }

    const validateName = () => {
        let name = document.querySelector('#name').value
        let regex = new RegExp("/^(\\w.+\\s).+$/")

        if (typeof name !== 'string'){
            document.querySelector('#name-warning').textContent = 'Name must be a string'
            return false
        }

        if (!regex.test(name)){
            document.querySelector('#name-warning').textContent = 'Name must be a full name'
            return false
        }

        if (name.length < 3){
            document.querySelector('#name-warning').textContent = 'Name must be at least 3 characters'
            return false
        }

        if (name.length > 250){
            document.querySelector('#name-warning').textContent = 'Name must be less than 250 characters'
            return false
        }

        return true
    }

    const validateEmail = () => {
        let email = document.querySelector('#email').value

        if (typeof email !== 'string'){
            document.querySelector('#email-warning').textContent = 'Email must be a string'
            return false
        }

        return true
    }

    const sendData = async (name, email) => {
        let dataToSend = {name: name, email: email}
        let eventURL = 'http://localhost:3000/participants/' + props.eventId

        await fetch (eventURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='modal'>
            <div className='container'>
                <div className='card'>
                    <div className='card__content'>
                        <div className='card__header'>
                            <h2 className='card__title'>Add a Participant</h2>
                        </div>
                        <img className='card__illustration' src='../public/gifti_assets/participant_illustration.svg'/>
                        <form className='addParticipantForm' onSubmit={clickSubmit}>
                            <label>Full Name <p id='name-warning' className='addParticipantForm__warning'></p>
                                <input required id='name' className='addParticipantForm__input' type='text' minLength='3' maxLength='250' value={name} onChange={handleNameChange} onBlur={validateName}/>
                            </label>
                            <label>Email <p id='email-warning' className='addParticipantForm__warning'></p>
                                <input required id='email' className='addParticipantForm__input' type='email' value={email} onChange={handleEmailChange} onBlur={validateEmail}/>
                            </label>
                            <input className='addParticipantForm__submit' type='submit' value='Add Participant'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartFormNoAddress