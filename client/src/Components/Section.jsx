import "./Section.css";
import pic from "../assets/image.png";

const Section = () => {
    return (
        <div className="section-container">
            <div className="section-text">
                <h2>Results that speak<br />for themselves</h2>
                <p>With a focus on collaboration and creativity.Tasmosia<br />offers a unique approach to working with businesses<br />and organizations of all sizes</p>

            </div>

            <div className="section-card">
                <div>
                    <img 
                    src= {pic}
                    
                    />
                </div>
                <h3>We will select a team of <br />great specialist <br />for your project</h3>
            </div>
        </div>
    );
};

export default Section;