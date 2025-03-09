import Title from "../Title/Title"
import "./AboutSection.css"
import aboutTop from "../../data/AboutTopData"
import aboutBottom from "../../data/AboutBottomData"




function AboutSection() {
  return (
    <section>
      <Title titleSub={'About us'} titleMain={'why we travel'} />
      <AboutUsCont />
    </section>
  )
}

function AboutUsCont() {
  return(
    <div className="about-us-cont">
      <div className="about-us-top">
        <p className="about-us-top-title">
          our commitment to fulfilling dreams
        </p>

        <div className="about-cards">
          {aboutTop.map(data => <AboutCard key={data.cardTitle} className={data.className} icon={data.icon} cardTitle={data.cardTitle} cardExcerpt={data.cardExcerpt} />)}
        </div>
      </div>

      <div className="about-us-middle">
        <img src="src\assets\about-img.jpg" alt="" />
      </div>

      <div className="about-us-bottom">
        <p className="about-us-bottom-title">
          what makes us different
        </p>

        <div className="about-cards">
        {aboutBottom.map(data => <AboutCard key={data.cardTitle} className={data.className} icon={data.icon} cardTitle={data.cardTitle} cardExcerpt={data.cardExcerpt} />)}
        </div>
      </div>
    </div>
  )
}

function AboutCard({icon, cardTitle, cardExcerpt, className}) {
  return (
    <div className={className}>
      {icon}
      <p className="card-title">{cardTitle}</p>
      <p className="card-excerpt">{cardExcerpt}</p>
    </div>
  )
}

export default AboutSection
