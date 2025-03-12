import React from "react";
import Title from "../Title/Title";
import "./TestimonialSection.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import ReadOnlyRating from "../ReadOnlyRating/ReadOnlyRating";
import testimonialsData from "../../data/TestimonialsData";

function TestimonialSection() {
  return (
    <section className="testimonials-section">
      <Title
        titleSub={"testimonials"}
        titleMain={"real stories, unforgettable experiences"}
      />

      <div className="testimonials-container">
        {testimonialsData.map((data) => (
          <TestimonialsCard
            key={data.name}
            ProfilePhoto={data.profilePhoto}
            Name={data.name}
            PostDate={data.postDate}
            Quote={data.quote}
          />
        ))}

        <IoIosArrowDropleftCircle className="left-arrow" />
        <IoIosArrowDroprightCircle className="right-arrow" />
      </div>
    </section>
  );
}

function TestimonialsCard({ ProfilePhoto, Name, PostDate, Quote }) {
  return (
    <div className="testimonials-card">
      <div className="user-details">
        <div className="profile-photo-wrapper">
          <img src={ProfilePhoto} alt="" />
        </div>
        <div className="name-date">
          <p className="user-name">{Name}</p>
          <p className="post-date">{PostDate}</p>
        </div>
      </div>

      <div className="rating-container">
        <ReadOnlyRating />
      </div>

      <div className="quote-wrapper">
        <p className="quote">{Quote}</p>
      </div>
    </div>
  );
}

export default TestimonialSection;
