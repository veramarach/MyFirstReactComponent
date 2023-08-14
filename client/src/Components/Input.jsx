
import "./Input.css";

const Input = () => {
    return (
        <div className="registration">
            <h1>Register Now</h1>
            <input type ="text" placeholder= "enter firstname" />
            <input type ="date" placeholder="date of birth" />
            <input type="tel" placeholder="phone number" />
            <input type="email" placeholder="enter email" />
        </div>
    );
};

export default Input;