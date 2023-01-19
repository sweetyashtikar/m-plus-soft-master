import images from "./images";
import {
  FaPaperPlane,
  FaEdit,
  FaRocket,
  FaShoppingCart,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { ImMagicWand } from "react-icons/im";

const gradient = "url(#blue-gradient)";

const services = [
  {
    id: 1,
    icon: <FaPaperPlane style={{ fill: gradient }} />,
    title: "Web Designing & Development",
    text: " For us, designing & development is something that can convert any visitor into your permanent customers, we build something similar.",
  },
  {
    id: 2,
    icon: <BiDollarCircle style={{ fill: gradient }} />,
    title: "Grow your business",
    text: "We will help you to grow your business with the latest SEO technology and attractive web designing and development programs.",
  },
  {
    id: 3,
    icon: <FaRocket style={{ fill: gradient }} />,
    title: "Search Engine Optimization",
    text: " SEO is the heart of any website, with the help of it, the lifetime and reach of the website will grow more and more. Don't you want that for your business?",
  },
  {
    id: 4,
    icon: <FaEdit style={{ fill: gradient }} />,
    title: "Social Media",
    text: "Social Media is a great platform via one can grow its business amongst users and we are great at that.Our Social Media experts will help to grow your business through Social Media Marketing.",
  },
  {
    id: 5,
    icon: <ImMagicWand style={{ fill: gradient }} />,
    title: "CRM Developement",
    text: "For unique business, a unique software is required and that'where we come to business. Tell us about your requirement and we will build the similar requirement.",
  },
  {
    id: 6,
    icon: <FaShoppingCart style={{ fill: gradient }} />,
    title: "SEO Content Writing",
    text: "For unique business, a unique software is required and that' where we come to business. Tell us about your requirement and we will build the similar requirement.",
  },
];
const about = [
  {
    id: 7,
  },
];

const portfolio = [
  {
    id: 16,
    image: images.portfolio_img_1,
  },
  {
    id: 17,
    image: images.portfolio_img_2,
  },
  {
    id: 18,
    image: images.portfolio_img_3,
  },
];

const testimonials = [
  {
    id: 19,
    image: images.pic_img_1,
    name: "Nicholas Tung",
    text: "Owner",
    rating: 5,
  },
  {
    id: 20,
    image: images.pic_img_2,
    name: "Kelly Boltan",
    text: " Team Leader .",
    rating: 5,
  },
  {
    id: 21,
    image: images.pic_img_3,
    name: "Micro Cervi ",
    text: "Web Developer.",
    rating: 5,
  },
  {
    id: 22,
    image: images.pic_img_4,
    name: "Chavelt Charles",
    text: " Business Development Executive & Content Writer.",
    rating: 5,
  },
  {
    id: 22,
    image: images.pic_img_5,
    name: "Dom Sterland",
    text: " CEO.",
    rating: 5,
  },
  {
    id: 22,
    image: images.pic_img_6,
    name: "Sachin Singh",
    text: " Sr. Manger HR, Lupin LTD.",
    rating: 5,
  },

];

const contact = [
  {
    id: 25,
    icon: <FaPhoneAlt style={{ fill: gradient }} />,
    info: "+91 1234567890",
  },
  {
    id: 26,
    icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
    info: "contact@mplussoft.com",
  },
  {
    id: 27,
    icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
    info: "MPLUSSOFT",
    text: "501/502, 5th Floor, Niche Facade, New Airport Rd, Viman Nagar, Pune, Maharashtra 411014",
  },
];

const sections = { services, about, portfolio, testimonials, contact };

export default sections;
