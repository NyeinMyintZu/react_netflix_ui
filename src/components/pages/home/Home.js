import React from "react";
import "./home.scss";
import Navbar from "../../navbar/Navbar";
import List from "../../list/List";
import Featured from "../../featured/Featured";
import Footer from "../../footer/Footer";
function myList(num){
  const output = new Array();
  for(let i = 0; i< num ; i++){
      output.push(<List />)
  }
  return output;
}
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      {myList(3)}
      <Footer />
    </div>
  );
};
export default Home;
