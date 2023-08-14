import Header from "./Components/Header";
import Button from "./Components/Button";
import Hero from "./Components/Hero";
import Input from "./Components/Input";
import Section from "./Components/Section";
import Profile from "./Components/Profile";
import Card from "./Components/Card";
import pic1 from "./assets/photo8.png";
import pic2 from "./assets/photo13.png";
import pic3 from "./assets/photo9.png";
import Hero2 from "./Components/Hero2";
import Bookings from "./Components/Bookings";
import Card2 from "./Components/Card2";
import Button2 from "./Components/Button2";


const App = () => {
  return (
    <div>
      <Header />
      <Button />
      <Hero />
      <Input />
      <Section />
      <Profile
      name= "amara"
      email= "amara@gmail.com"
      age= "40yrs"
      
      />

      <Profile 
      name= "grace"
      email= "grace@gmail.com"
      age= "100yrs"
      
      />

      <Profile
      name= "agatha"
      email="agatha_lucia@gmail.com"
      age = "27yrs"
      
      />
      <Card 
      avatar= {pic1}
      />

      <Card
      avatar= {pic2}
      />

      <Card
      avatar={pic3}
      
      />
      <Hero2 />
      <Bookings />
      <Card2 />
      <Button2 />
    </div>
  
  );
};

export default App;