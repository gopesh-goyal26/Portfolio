import TechBallsCanvas from "../components/models/tech_logos/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Tech = () => {
  return (
    <div id="skills">
      <TitleHeader
           title="How I Can Contribute & My Key Skills"
           sub="🤝 What I Bring to the Table"
         />
      <div className='mt-16 h-96'>
        <TechBallsCanvas technologies={technologies} />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");