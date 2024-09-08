import "./featuredCard.css"

function FeaturedCard(props){
    return (
        <div className="feature-item">
            <img src={props.icon} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default FeaturedCard