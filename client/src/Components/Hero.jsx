import pic from "../assets/heropage.png";
import "./Hero.css";

const Hero = () => {
    return (
        <div className= "hero-section">
            
            <div>
                <img 
                src= {pic}
        
                />

            </div>
            <div>
                <h1>TERMOSIA</h1>
                <p>Termosia is a start up <br />thats making the world a better place</p>
                
            </div>
            
        </div>
    );
};

export default Hero;