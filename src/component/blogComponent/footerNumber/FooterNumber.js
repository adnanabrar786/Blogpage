import React ,{useState} from "react";
import "./footernumber.css";

const FooterNumber = () => {
// const [OneFooter, setONeFooter] = useState("");
// const [TwoFooter, setTwoFooter] = useState("");
// const [ThreeFooter, setThreeFooter] = useState("");
// const [FourFooter, setFourFooter] = useState("");
// const [FiveFooter, setFiveFooter] = useState("");
// const [SixFooter, setSixFooter] = useState("");
// const [SevenFooter, setSevenFooter] = useState("");
// const [EightFooter, setEightFooter] = useState("");
// const [NineFooter, setNineFooter] = useState("");
// const [TenFooter, setTenFooter] = useState("");
// const [ElevenFooter, setElevenFooter] = useState("");
// const [PrevFooter, setPrevFooter] = useState("");
// const [NextFooter, setNextFooter] = useState("");



  return (
    <div className="fotter_number_container">
      <div className="grey_line"></div>
      <div className="main_div">
        <div className="prev">Prev</div>
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box">6</div>
        <div className="box">7</div>
        <div className="box">8</div>
        <div className="box">9</div>
        <div className="box">10</div>
        <div className="box">11</div>
        <div className="next">Next</div>
      </div>
    </div>
  );
};

export default FooterNumber;
