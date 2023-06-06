import './assets/css/style.css';
import Card from "./components/card.jsx";
import carImage from './assets/image/im.jpeg';


function App() {
    const content = "Chevrolet is iconic American car brand known for its reliable, dependable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world.";

    return (
           <Card carImage={carImage} title="Lizard" content={content} linkList={['SHARE','LEARN MORE']}/>
    )
}

export default App
