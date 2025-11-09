import "./ImageCarousel.css"

export default function ImageCarousel() {

    return (
        <div className="image-carousel-container">
            <div className="image-container">
                <div className="image-box">
                    <h3>Möbel & Lampen</h3>
                    <img className="image" src={require('../../assets/images/1e5224c0-01f7-4dfe-b993-83f3dc8c4162.JPG')} alt="Image3" />
                </div>
                <div className="image-box">
                    <h3>Kleidung</h3>
                    <img className="image" src={require('../../assets/images/0e1c0393-fd9e-4325-bc16-fb25c7d2cf65.JPG')} alt="Image3" />
                </div>
                <div className="image-box">
                    <h3>Geschenkartikel</h3>
                    <img className="image" src={require('../../assets/images/e23a2a0c-3266-4a60-a088-b9d9ec21d8b6.JPG')} alt="Image3" />
                </div>
                <div className="image-box">
                    <h3>Pflanzen</h3>
                    <img className="image" src={require('../../assets/images/PHOTO-2025-11-08-18-41-26.jpg')} alt="Image3" />
                </div>
            </div>
        </div>
    )
}