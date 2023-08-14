import "./Profile.css";


const Profile = ({name, email, age}) => {
    return (
        <div className="container">
            <div className="image">
                <img />
            </div>

            <div>
                <div>{name}</div>
                <div>{email}</div>
                <div>{age}</div>
            </div>

        </div>
    );
};

export default Profile;