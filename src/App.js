
import './App.css';
import "../src/styles/App.scss"
import "../src/styles/Intro.scss"
import Section from './components/Section';
import Introvideo from './components/Introvideo';
import freshtopicimg from "./assets/academy.png"
import freshtopic2img from "./assets/story.png"
import data from "../src/data/data.json";
const yellow="#fff100",pink="#ed1e79",white="#fff",brown="#6d3d0f";

function App() {
  const {freshTopic,freshTopic2,tedTalks}=data;
  return (
    <>
    <Introvideo/>
    <Section h3={freshTopic.heading} text={freshTopic.text} btntxt={freshTopic.btn} imgsrc={freshtopicimg} backgrnd={pink} headingclr={yellow} textclr={yellow} btnclr={pink} btnbgcolor={yellow} />
    {" "}
    <Section h3={freshTopic2.heading} text={freshTopic2.text} btntxt={freshTopic2.btn} imgsrc={freshtopic2img} backgrnd={pink} headingclr={yellow} textclr={yellow} btnclr={pink} btnbgcolor={yellow} />
    <Section h3={tedTalks.heading} text={tedTalks.text} btntxt={tedTalks.btn} imgsrc={freshtopicimg} backgrnd={yellow} headingclr={pink} textclr={pink} btnclr={yellow} btnbgcolor={pink} />
    </>


  );
}

export default App;
