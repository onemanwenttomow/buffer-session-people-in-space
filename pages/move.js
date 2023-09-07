import { useEffect, useState } from "react";

export default function Move() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("useEffect in Move");
    // goal is to add an event listener for when the mouse moves
    window.addEventListener("mousemove", handleMouseMove);

    // return a cleanup function

    return () => {
      console.log("removing the event listener in the cleanup");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(event) {
    console.log("mouse is moving!", event);
    setCoords({ x: event.pageX, y: event.pageY });
  }

  console.log("about to render Move");

  return (
    <div>
      <h1>Move</h1>
      <h2>x: {coords.x}</h2>
      <h2>y: {coords.y}</h2>
    </div>
  );
}
