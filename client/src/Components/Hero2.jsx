import "./Hero2.css"
import pics from "../assets/photo13.png"
const Hero2 = () => {
    return (
        <div className="heros-content">
            <div>
                <img
                src= {pics}  
                
                />
            </div>

            <div className="heros-text">
                <h1>Result that speak for themselves</h1>
                <p>With a focus on collaboration and <br />creativity.Tasmosia offers a unique approach<br />to working with businesses and<br />organizations of all sizes</p>
            </div>
        </div>
    );
};

export default Hero2;