import '../assets/css/image.css'

function Image({imageSrc}) {
    return (
        <div className="image">
            <img src={imageSrc} alt="Lizard"/>
        </div>
    );
}

export default Image;