import "./imgBanner.css"

function ImgBanner(props){

    return(
        <div className="hero">
            <section className="hero-content">
                {props.children}
            </section>
        </div>
    )
}

export default ImgBanner