import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center ">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hi, I'm <span className="font-semibold">Sam</span>👋🏻
      <br />a Software Developer from the U.S.
    </h1>
  ),
  2: <InfoBox text="Transforming Code into Creativity, One Line at a Time." link="/about" btnText="Learn more" />,
  3: <InfoBox text="Your Vision, My Expertise" link="/projects" btnText="Visit My Portfolio" />,
  4: <InfoBox text="Ready to Collaborate?" link="/contact" btnText="Let's Chat" />,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
