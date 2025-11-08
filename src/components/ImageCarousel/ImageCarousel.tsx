import "./ImageCarousel.css"

export default function ImageCarousel() {

    return (
        <div className="image-carousel-container">
            <div className="image-container">
                <div className="image-box">
                    <h4>Lampen</h4>
                    <img className="image" src={require('../../assets/images/IMG_3241.JPG')} alt="Image1" />
                </div>
                <div className="image-box">
                    <h4>Leinen</h4>
                    <img className="image" src={require('../../assets/images/IMG_3241.JPG')} alt="Image2" />
                </div>
                <div className="image-box">
                    <h4>Möbel</h4>
                    <img className="image" src={require('../../assets/images/IMG_3241.JPG')} alt="Image3" />
                </div>
            </div>
        </div>
    )
}