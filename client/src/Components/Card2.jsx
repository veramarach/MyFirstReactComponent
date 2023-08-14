import pic from "../assets/heropage.png";

const Card2= () => {
    return (
        <div>
            <div className="section-card">
                <img 
                src= {pic}
                
                />
            </div>
            <div className="section-text">
              <h1>Termosia</h1> 
              <p>Termosia is a start up<br />that makes the world <br />a better place.</p> 
            </div>
        </div>
    );
};

export default Card2;