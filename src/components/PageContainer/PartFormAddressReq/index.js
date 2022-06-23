import {useState} from "react";

const PartFormAddressReq = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address1, setAddress1] = useState('')
    const [city, setCity] = useState('')
    const [postcode, setPostcode] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleAddress1Change = (e) => {
        setAddress1(e.target.value)
    }

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handlePostcodeChange = (e) => {
        setPostcode(e.target.value)
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        if(validateName() && validateEmail() && validateAddress1() && validateCity() && validatePostcode()) {
            sendData(name, email, address1, city, postcode)
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

    const validateAddress1 = () => {
        let address1 = document.querySelector('#address1').value

        if (typeof address1 !== 'string'){
            document.querySelector('#address1-warning').textContent = 'Address line 1 must be a string'
            return false
        }

        return true
    }

    const validateCity = () => {
        let city = document.querySelector('#city').value

        if (typeof city !== 'string'){
            document.querySelector('#city-warning').textContent = 'city must be a string'
            return false
        }

        return true
    }

    const validatePostcode = () => {
        let postcode = document.querySelector('#postcode').value

        if (typeof postcode !== 'string'){
            document.querySelector('#postcode-warning').textContent = 'Postcode must be a string'
            return false
        }

        return true
    }

    const sendData = async (name, email, address1, city, postcode) => {
        let dataToSend = {name: name, email: email, address: {street: address1, city: city, postcode: postcode}}
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
                            <label>Address Line 1 <p id='address1-warning' className='addParticipantForm__warning'></p>
                                <input required id='address1' className='addParticipantForm__input' type='text' value={address1} onChange={handleAddress1Change} onBlur={validateAddress1}/>
                            </label>
                            <label>City <p id='city-warning' className='addParticipantForm__warning'></p>
                                <input required id='city' className='addParticipantForm__input' type='text' value={city} onChange={handleCityChange} onBlur={validateCity}/>
                            </label>
                            <div className='addParticipantForm__countyPostcode'>
                                <label>Postcode <p id='postcode-warning' className='addParticipantForm__warning'></p>
                                    <input required id='postcode' className='addParticipantForm__input' type='text' value={postcode} onChange={handlePostcodeChange} onBlur={validatePostcode}/>
                                </label>
                            </div>
                            <input className='addParticipantForm__submit' type='submit' value='Add Participant'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartFormAddressReq