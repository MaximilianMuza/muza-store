import "./ImageBox.css"

export default function ImageBox() {
    return (
        <div className="image-box-container">
            <div className="image-box">
                <h4>Lampen</h4>
                <img className="image" src={require('../../assets/images/IMG_3241.JPG')} alt="Image1" />
            </div>
            <div className="image-box">
                <h4>Lampen</h4>
                <img className="image" src={require('../../assets/images/IMG_3241.JPG')} alt="Image1" />
            </div>
            <div className="image-box">
                <h4>Lampen</h4>
                <img className="image" src={require('../../assets/images/IMG_3241.JPG')} alt="Image1" />
            </div>
            <div className="image-box">
                <h4>Lampen</h4>
                <img className="image" src={require('../../assets/images/IMG_3241.JPG')} alt="Image1" />
            </div>
            <div className="image-box">
                <h4>Lampen</h4>
                <img className="image" src={require('../../assets/images/IMG_3241.JPG')} alt="Image1" />
            </div>
            <div className="image-box">
                <h4>Lampen</h4>
                <img className="image" src={require('../../assets/images/IMG_3241.JPG')} alt="Image1" />
            </div>
        </div>
    )
}