import "./Hero.css"
import Header from "../Header/Header"

function Hero() {
  return (
    <div className="hero-container">
      <Header />
      <TaglineContainer />
    </div>
  )
}

function TaglineContainer() {
  return(
    <div className="tagline-container">
      <div className="tagline-cont-top">
        <h1 className="tagline">discover</h1>
        <p className="tagline-subtext">Explore diverse destinations, from hidden gems to iconic landmarks, and embark on unforgettable journeys. Your adventure begins here - discover the world with us!</p>
      </div>
      
      <div className="tagline-cont-bottom">
        <div className="span">let's fly</div>
        <h1 className="tagline">around the world</h1>
      </div>
    </div>
  )
}
export default Hero



