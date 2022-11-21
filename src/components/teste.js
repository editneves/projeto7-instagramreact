function FavoriteColor() {
    const [color, setColor] = useState("white");
    const [name, setName] = useState("heart-outline");
    return (
        <>
            <div>
                <ion-icon onClick={() => { setColor("red"); setName("heart"); }} color="white" data-test="like-post" name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>


        </>
    )
}



import "./styles.css";
import { useState } from "react";

export default function App() {
  // Declare a new state variable, which we'll call "count"
  const [heartColor, setHeartColor] = useState("blue");
  

  return (
    <div>
      <ion-icon style={{ color: heartColor }} onClick={() => setHeartColor("red")} data-test="like-post" name="heart-outline"></ion-icon>
    </div>
  );
}