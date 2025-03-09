import Title from "../Title/Title"
import { Link } from 'react-router-dom'
import "./FeaturedDestinationsSection.css"
import featuredDestData from "../../data/FeaturedDestinationsData"

function FeaturedDestinationsSection() {
  return (
    <section>
        <Title titleSub={'featured destinations'} titleMain={'discover our top picks'} />
        
        <div className="destination-cards">
            {featuredDestData.map(destData => <DestinationCard key={destData.destinationName} Image={destData.image} DestinationName={destData.destinationName} DestinationExcerpt={destData.destinationExcerpt} DestinationPrice={destData.destinationPrice} />)}
        </div>
    </section>
  )
}

function DestinationCard({ Image, DestinationName, DestinationExcerpt, DestinationPrice, }) {
    return(
        <div className="destination-card">
            <div className="destination-image-wrapper">
                <img src={Image} alt="" />
                <p className="destination-name">{DestinationName}</p>
            </div>

            <div className="excerpt-cont">
                <p className="destination-excerpt">{DestinationExcerpt}</p>
            </div>



            <div className="destination-card-cta">
                <p className="destination-price">{DestinationPrice}</p>
                <Link>view</Link>
            </div>
        </div>
    )
}

export default FeaturedDestinationsSection
