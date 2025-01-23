import logopic from "./assets/CodeMineSS_logo.png"  // we have to import cover image of the card like these

function Card(){
    
    return (
        <div className="card">
            <img src={logopic} className="card-img" alt="logo"></img>
            <h2 className="card-title">CodeMineSS</h2>
            <p className="card-description"> Click to view my Profile </p>

        </div>
    )
}

export default Card