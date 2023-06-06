import '../assets/css/card.css'
import Image from "./image.jsx";
import Title from "./title.jsx";
import Content from "./content.jsx";
import LinkBtn from "./link-btn.jsx";

function Card({carImage,title,content,linkList}) {

    return (
        <>
            <div className="container">
                <Image imageSrc={carImage}/>
                <div className="container__content">
                    <Title titleTxt={title}/>
                    <Content contentTxt={content}/>
                    <div className="links">
                        {linkList.map((link)=><LinkBtn btnTxt={link}/>) }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;