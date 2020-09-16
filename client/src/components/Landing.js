import React from "react"

const handleClick = () => {
    window.open('http://localhost:5000/auth/google', '_self')
}
const Landing = () => {
    return (
        <div>
            <h1><span>FUT</span> Record</h1>
            <h3>Track your FUT Champs journey</h3>
            <input type="button" value="LOGIN" onClick={handleClick}/>
        </div>
    )
}

export default Landing