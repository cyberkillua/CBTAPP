import React, { Component } from "react";
import { Link } from "react-router-dom";
class StartPage extends Component{
    
    render(){
        return(
            <div className="start">
                <h1>The Killua Quiz</h1>
                <p>Welcome to the Killua Quiz, you have 1 min to answer 10 questions</p>
                <Link to = "/Questionpage" className="Link"  >Start</Link>
                
            </div>
        )
    }
}

export default StartPage