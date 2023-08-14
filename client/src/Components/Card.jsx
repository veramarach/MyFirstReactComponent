import "./Card.css";


const Card= ({avatar}) => {
    return (
       <div className="card-container">
         <div className="card-image">
            <img
            src= {avatar}
            
            />
        </div>
       </div>
    );
};

export default Card;