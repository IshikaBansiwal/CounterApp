import React from "react";
//import Nav from "./components/Nav";
//import Footer from "./components/Footer";
import Footer from "./Footer";
 function Home(props){
    return(
        <>
   
           <h1> this is {props.car.model}</h1>
           <h2>{props.bik}</h2>
        </>
    )
 }
 export default Home;