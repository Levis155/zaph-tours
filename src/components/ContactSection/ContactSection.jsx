import {
  FaPhoneAlt,
  FaClock,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./ContactSection.css";

function ContactSection() {
  return (
    <>
      <section className="contact-section-cont">
        <ContactDetails />

        <ContactForm />
      </section>

      <MapContainer />
    </>
  );
}

function ContactDetails() {
  return (
    <div className="contact-details">
      <ContactCard
        ContactCardIcon={<FaPhoneAlt />}
        ContactCardTitle="our contacts"
        Detail1Title="Phone"
        Detail1Link="+254720875598"
        Detail2Title="email"
        Detail2Link="zaphtours@gmail.com"
        socials={<ContactCardSocials />}
      />

      <ContactCard
        ContactCardIcon={<FaLocationCrosshairs />}
        ContactCardTitle="location"
        Detail1Title="Nairobi"
        Detail1Link="fake towers, fake street"
        Detail2Title="mombasa"
        Detail2Link="fake business center, fake town"
      />

      <ContactCard
        ContactCardIcon={<FaClock />}
        ContactCardTitle="office hours"
        Detail1Title="weekdays"
        Detail1Link="0900hrs - 1700hrs"
        Detail2Title="saturdays"
        Detail2Link="0900hrs - 1300hrs"
      />
    </div>
  );
}

function ContactCard({
  ContactCardIcon,
  ContactCardTitle,
  Detail1Title,
  Detail1Link,
  Detail2Title,
  Detail2Link,
  socials,
}) {
  return (
    <div className="contact-card">
      <div className="contact-card-title">
        {ContactCardIcon}
        <p>{ContactCardTitle}</p>
      </div>

      <div className="contact-card-details">
        <div className="contact-card-detail">
          <p className="detail1-title">{Detail1Title}</p>
          <Link>{Detail1Link}</Link>
        </div>

        <div className="contact-card-detail">
          <p className="detail1-title">{Detail2Title}</p>
          <Link>{Detail2Link}</Link>
        </div>

        {socials}
      </div>
    </div>
  );
}

function ContactCardSocials() {
  return (
    <div className="contact-card-detail">
      <p className="detail1-title">social media</p>
      <div className="contact-card-socials">
        <Link>
          <FaFacebook />
        </Link>
        <Link>
          <FaXTwitter />
        </Link>
        <Link>
          <FaYoutube />
        </Link>
        <Link>
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form action="" className="contact-form">
      <p className="contact-form-title">contact us</p>

      <div className="inputs-row">
        <TextInput For="first-name" Label={"first name *"} Id="first-name" />
        <TextInput For="last-name" Label={"last name *"} Id="last-name" />
      </div>

      <div className="inputs-row">
        <CountrySelectInput />
        <NumberInput
          For="phone-number"
          Label={"phone-number *"}
          Id="phone-number"
        />
      </div>

      <div className="inputs-row">
        <TextInput
          For="email-address"
          Label={"email address *"}
          Id="email-address"
        />
        <NumberInput
          For="duration"
          Label={"duration of tour in days *"}
          Id="duration"
        />
      </div>

      <div className="inputs-row">
        <DateInput
          For="start-date"
          Label={"tour start date *"}
          Id="start-date"
        />
        <DateInput For="end-date" Label={"tour end date *"} Id="end-date" />
      </div>

      <div className="inputs-row">
        <NumberInput For="adults" Label={"number of adults *"} Id="adults" />
        <NumberInput
          For="children"
          Label={"number of children *"}
          Id="children"
        />
      </div>

      <div className="inputs-row">
        <CheckboxChildrenAge />
        <NumberInput
          For="budget"
          Label={"estimated budget of tour (per person) *"}
          Id="budget"
        />
      </div>

      <div className="inputs-row">
        <CurrencySelectInput />
        <TripTypeRadioInput />
      </div>

      <button className="form-submit-btn" type="button">
        Submit
      </button>
    </form>
  );
}

function TextInput({ For, Label, Id }) {
  return (
    <div className="input-container">
      <label htmlFor={For}>{Label}</label>
      <input className="text-input" type="text" id={Id} />
    </div>
  );
}

function NumberInput({ For, Label, Id }) {
  return (
    <div className="input-container">
      <label htmlFor={For}>{Label}</label>
      <input className="number-input" type="number" id={Id} />
    </div>
  );
}

function DateInput({ For, Label, Id }) {
  return (
    <div className="input-container">
      <label htmlFor={For}>{Label}</label>
      <input className="date-input" type="date" id={Id} />
    </div>
  );
}

function CheckboxChildrenAge() {
  return (
    <div className="checkbox-inputs-container">
      <p>age of children</p>

      <div className="checkbox-input-container">
        <input type="checkbox" id="0-3yrs" name="0-3yrs" value="0-3yrs" />
        <label for="0-3yrs">0 - 3 yrs</label>
      </div>

      <div className="checkbox-input-container">
        <input type="checkbox" id="4-12yrs" name="4-12yrs" value="4-12yrs" />
        <label for="4-12yrs">4 - 12 yrs</label>
      </div>

      <div className="checkbox-input-container">
        <input type="checkbox" id="13-18yrs" name="13-18yrs" value="13-18yrs" />
        <label for="13-18yrs">13 - 18 yrs</label>
      </div>
    </div>
  );
}

function TripTypeRadioInput() {
  return (
    <div className="radio-inputs-container">
      <p>Trip Type</p>

      <div className="radio-input-container">
        <input type="radio" id="type1" name="type1" value="type1" />
        <label for="type1">Type 1</label>
      </div>

      <div className="radio-input-container">
        <input type="radio" id="type2" name="type2" value="type2" />
        <label for="type2">type 2</label>
      </div>

      <div className="radio-input-container">
        <input type="radio" id="type3" name="type3" value="type3" />
        <label for="type3">type 3</label>
      </div>
    </div>
  );
}

function CurrencySelectInput() {
  return (
    <div className="input-container">
      <label htmlFor="currency">Currency</label>
      <select className="select-input" name="currency" id="currency">
        <option value=""></option>
        <option value="usd">USD</option>
        <option value="euro">EURO</option>
        <option value="gbp">GBP</option>
        <option value="rub">RUB</option>
        <option value="kes">KES</option>
      </select>
    </div>
  );
}

function CountrySelectInput() {
  return (
    <div className="input-container">
      <label htmlFor="currency">Country</label>
      <select className="select-input" name="country" id="country">
        <option value=""></option>
        <option value="usa">USA</option>
        <option value="euro">Kenya</option>
        <option value="gbp">Uganda</option>
        <option value="rub">Spain</option>
        <option value="kes">Japan</option>
      </select>
    </div>
  );
}

function MapContainer() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6569282611435!2d36.85844507409852!3d-1.382486935737008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0fbbde36bc45%3A0x6f9671d1966870ec!2sNairobi%20National%20Park!5e0!3m2!1sen!2ske!4v1741683538348!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ContactSection;
