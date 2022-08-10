import React, { useRef, useState } from "react";
import "./list.scss";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ListItem from "../listItem/ListItem";

function listItem(num) {
  const numbers = new Array();
  for (let i = 0; i < num; i++) {
    numbers.push(<ListItem index={i} />);
  }
  return numbers;
}

export default function List() {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 6) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
           {/* {numbers.map((num) => {
            return <ListItem index={num} />;
          })} */}
          {listItem(10)}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
