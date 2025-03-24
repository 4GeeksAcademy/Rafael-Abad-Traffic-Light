import { useEffect, useState } from "react";
import React from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	
	const cycleLight=()=>{
		if (color==="red"){
			setColor("yellow");
		}
		else if (color==="yellow"){
			setColor("green");
		}
		else if (color==="green"){
			setColor("red");
		}
	}
	return (
	<div className="traffic-light">	
		<div
			className={`light-div red ${color==="red" ? "active":""}`}
			onClick={()=>setColor("red")}
		></div>
		<div
			className={`light-div yellow ${color==="yellow" ? "active":""}`}
			onClick = {()=> setColor("yellow")}
		></div >
		<div
			className={`light-div green ${color === "green" ? "active" : ""}`}
			onClick={() => setColor("green")}
		></div>
		<button className="cycle-button" onClick={cycleLight}></button>
		<p className="button-description-1">Click this to cycle the colors</p>
		
	</div >
	
	)
};

export default Home;



// useEffect(()=>{

// }, []);
// return (
// 	<div className="text-center">

// 	</div>
// );