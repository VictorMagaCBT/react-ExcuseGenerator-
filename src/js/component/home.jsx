import React, { useEffect } from "react";
import Button from "./button.jsx";
import RandomExcuse from "./randomExcuse.jsx";


const Home = () => {
   
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    

  return (

    <div className="card text-center">
      <RandomExcuse who={who} action={action} what={what} when={when}/>
    </div>
  )
  };

export default Home;