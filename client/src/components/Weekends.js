import React, {useState} from "react";
import axios from 'axios'

const Weekends = () => {

    const [match, setMatch] = useState({
        "myScore": 0,
        "oppScore": 0,
        "home": false,
        "extraTime": false,
        "penalties": false,
        "disconnect": false,
        "weekendNumber": undefined
    })

    const {myScore, oppScore, home, extraTime, penalties, disconnect} = match

    const onChange = (e) => setMatch({...match, [e.target.name]: e.target.value})
    const handleToggle = (e) => setMatch({...match, [e.target.name]: !match[e.target.name]})

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (parseInt(myScore) === 0 && parseInt(oppScore) === 0) {
            console.log('Scores cannot be both 0s');
        } else {
            try {
                // const config = {
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // }
                const newMatch = {
                    ...match, weekendNumber: 0
                }
                // const body = JSON.stringify(newMatch)
                const res = await axios.post('/matches/add', newMatch)
                console.log("GOT: " + res.data);
                console.log("GOT: " + res);
            } catch (err) {
                console.log("ERROR :" + err.response.data);
            }
            console.log("END");
        }
    }

    return (
        <section className="weekends">
            <h1 className="sagar">Weekends Page</h1>
            <form onSubmit={handleSubmit}>
                <select name="weekends" id="weekends">
                    <option value="weekend1">Weekend 1</option>
                    <option value="weekend2">Weekend 2</option>
                    <option value="weekend3">Weekend 3</option>
                    <option value="weekend4">Weekend 4</option>
                </select>

                <input type="button" value="Add Weekend"/>
                <input type="button" value="Delete Weekend"/>
                <p>W:22 L:3 NP:5</p>

                <label htmlFor="myScore">My Score: </label>
                <input required type="number" id="myScore" name="myScore" value={myScore} onChange={onChange} min="0"
                       max="20"/>

                <label htmlFor="oppScore">Opponent Score:</label>
                <input required type="number" id="oppScore" name="oppScore" value={oppScore} onChange={onChange} min="0"
                       max="20"/>

                <input type="checkbox" id="home" name="home" checked={home} onChange={handleToggle} value="home"/>
                <label htmlFor="home"> Home</label><br/>

                <input type="checkbox" id="penalties" name="penalties" checked={penalties} onChange={handleToggle}
                       value="penalties"/>
                <label htmlFor="penalties"> Penalties</label><br/>

                <input type="checkbox" id="extraTime" name="extraTime" checked={extraTime} onChange={handleToggle}
                       value="extraTime"/>
                <label htmlFor="extra-time"> Extra time</label><br/>

                <input type="checkbox" id="disconnect" name="disconnect" checked={disconnect} onChange={handleToggle}
                       value="disconnect"/>
                <label htmlFor="disconnect"> Disconnect</label><br/>

                <input type="submit" value="Save Match"/>
            </form>
            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#" className="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </section>
    )
}

export default Weekends