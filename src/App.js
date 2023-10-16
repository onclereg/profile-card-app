
import './App.css';
import alexa from './image/alexa.png';
import siri from './image/siri.png';
import cortana from './image/cortana.png';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="App">
     <ProfileCard  image={alexa} title="Alexa" content="I will help you buy stuffs off Amazon." username="@Alexa24" /> 
     <ProfileCard  image={cortana}  title="Cortana" content="Personal asistance by microsoft." username="@Cortana1" /> 
     <ProfileCard image={siri}  title="Siri" content="I don't get a lot of updates anymore." username="@Siri_1"  /> 
    </div>
  );
}

export default App;
