import { BsStars } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { FaCamera } from "react-icons/fa";

const starsIcon = <BsStars />;
const rocketIcon = <IoIosRocket />;
const cameraIcon = <FaCamera />;

const aboutTop = [
  {
    className: "about-card-top",
    icon: starsIcon,
    cardTitle: "Dream It, We Plan It",
    cardExcerpt:
      "Whatever your travel dreams, we turn them into reality with customized itineraries designed just for you.",
  },
  {
    className: "about-card-top",
    icon: rocketIcon,
    cardTitle: "Beyond Expectations",
    cardExcerpt:
      "We go the extra mile to surprise and delight you, ensuring your trip is more than you ever imagined.",
  },
  {
    className: "about-card-top",
    icon: cameraIcon,
    cardTitle: " Memories That Last",
    cardExcerpt:
      "We create moments that stay with you forever, from breathtaking sights to heartfelt connections.",
  },
];

export default aboutTop;
