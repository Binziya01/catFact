import { useState,useEffect } from "react";
import axios from "axios";



function App() {
  const [catFact,setCatFact]=useState("")

  const fetchData=async ()=>{
    const {data} =await axios.get("https://catfact.ninja/fact")
    // console.log(data.fact);
    setCatFact(data.fact)
  
  }
  useEffect(()=>{
    fetchData()
  },[]
  )

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center h-screen px-10 bg-black">
      <button onClick={fetchData} className="bg-blue-700 text-3xl px-6 py-2 rounded-md text-white">Generate cat fact</button>
      <h1 className="mt-7 text-white text-xl">{catFact}</h1>
      </div>

    </div>
  );
}

export default App;
