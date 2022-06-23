
import {useState} from "react";
import arrayShuffle from "array-shuffle";


const SendEmailButton = () => {
    const [giftingPartners, setGiftingPartners] = useState('')

    const assignGiftingPartners = (participants) => {
       let shuffledParticipants = arrayShuffle(participants)
        let isGiftingTo
        return shuffledParticipants.map((participant, index, array) => {
            if (array[index + 1]) {
                isGiftingTo = array[index + 1]
            } else {
                isGiftingTo = array[0];
            }
            return {
                participant,
                isGiftingTo
            }
        })
    }


    const sendData = async () => {

        await fetch('http://localhost:3000/participants/' + props.eventId, {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(giftingPartners)
        })
            .then(res => res.json())
            .then(data => {
               console.log(data)
            })
    }
    const clickSubmit = (e) => {
        e.preventDefault()
        setGiftingPartners(assignGiftingPartners(props.participants))
        sendData(giftingPartners)
    }

    return (

        <button className="btn btn--white" onClick={clickSubmit}>
            <p>Start Gifting!</p>
            <i className="fa-solid fa-arrow-right"></i>
        </button>
    )

}

export default SendEmailButton