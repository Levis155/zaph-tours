import "./NewsLetter.css"
import { FaArrowRightLong } from "react-icons/fa6";

function NewsLetter() {
  return (
    <section className='news-letter-section'>
      <NewsLetterCard />
    </section>
  )
}

function NewsLetterCard() {
    return(
        <form className="news-letter-card">
            <p className="newsletter-sub">get the latest</p>
            <h1 className="newsletter-title">subscribe now</h1>
            <p className="newsletter-excerpt">Sign up for Zaph Tours emails to be the first to see weekly updates on matters safaris and adventures.</p>

            <div className="input-button-outer-wrapper">
                <div className="input-button-cont">
                    <input type="text" placeholder="Email" />
                    <button type="button"><FaArrowRightLong /></button>
                </div>
            </div>

        </form>
    )
}

export default NewsLetter
