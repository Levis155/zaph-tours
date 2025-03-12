import { FaCamera, FaTheaterMasks, FaHotel } from "react-icons/fa";
import { MdOutlineGroups2 } from "react-icons/md";

const cultureIcon = <FaTheaterMasks />;
const hotelIcon = <FaHotel />;
const groupIcon = <MdOutlineGroups2 />;

const aboutBottom = [
  {
    className: "about-card-bottom",
    icon: cultureIcon,
    cardTitle: "Cultural Immersion",
    cardExcerpt:
      "Go beyond sightseeing with activities that let you connect deeply with local traditions, food, and people.",
  },
  {
    className: "about-card-bottom",
    icon: hotelIcon,
    cardTitle: "Unique Accommodations",
    cardExcerpt:
      "Stay in handpicked, one-of-a-kind lodgings that reflect the culture and charm of your destination.",
  },
  {
    className: "about-card-bottom",
    icon: groupIcon,
    cardTitle: "Small Group Tours",
    cardExcerpt:
      "We keep our groups intimate to ensure a more personalized and immersive experience for every traveler.",
  },
];

export default aboutBottom;
