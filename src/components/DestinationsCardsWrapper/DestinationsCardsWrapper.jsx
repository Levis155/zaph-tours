import React from "react";
import "./DestinationsCardsWrapper.css";
import { Link } from "react-router-dom";
import { MdGroups } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import destinationsData from "../../data/DestinationsData";

function DestinationsCardsWrapper() {
  return (
    <div className="destinations-cards-wrapper">
      <DestinationsPageTitle />
      <DPCards />
    </div>
  );
}

function DestinationsPageTitle() {
  return (
    <div className="destination-page-title">
      <p className="destination-page-title-sub">all our destinations</p>
      <p className="destination-page-title-main">
        Discover the World, One Adventure at a Time
      </p>
    </div>
  );
}

function DPCards() {
  return (
    <>
      {destinationsData.map((data) => (
        <DPCard
          key={data.name}
          Img={data.img}
          Name={data.name}
          Tagline={data.tagline}
          Excerpt={data.excerpt}
          PriceGroup={data.priceGroup}
          PriceIndividual={data.priceIndividual}
        />
      ))}
    </>
  );
}

function DPCard({ Img, Name, Tagline, Excerpt, PriceGroup, PriceIndividual }) {
  return (
    <div className="dp-card">
      <div className="dp-card-image-wrapper">
        <img src={Img} alt="" className="dp-card-img" />
        <div className="dp-card-image-name">
          <p>{Name}</p>
        </div>
      </div>

      <h2 className="dp-card-tagline">{Tagline}</h2>

      <p className="dp-card-excerpt">{Excerpt}</p>

      <div className="dp-card-details">
        <div className="price-group">
          <div className="price-top">
            <MdGroups />
            <p>price per group (4 people)</p>
          </div>

          <div className="price-bottom">
            <p>{PriceGroup}</p>
          </div>
        </div>

        <div className="price-individual">
          <div className="price-top">
            <FaUser />
            <p>Price per individual</p>
          </div>

          <div className="price-bottom">
            <p>{PriceIndividual}</p>
          </div>
        </div>

        <div className="dp-card-details-link">
          <Link className="view-link">view</Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationsCardsWrapper;
