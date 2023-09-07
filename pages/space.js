import { useEffect, useState } from "react";

export default function Space() {
  const [numberInSpace, setNumberInSpace] = useState(0);
  const [peopleInSpace, setPeopleInSpace] = useState([]);

  const peopleOnISS = peopleInSpace.filter((person) => person.craft === "ISS");
  console.log("peopleOnISS", peopleOnISS);

  useEffect(() => {
    // new we can do our side effect... i.e. fetch some data
    // or add an event listener to the page
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    console.log("data: ", data);
    setNumberInSpace(data.number);
    setPeopleInSpace(data.people);
  }

  return (
    <div>
      <h1>Number people in Space: {numberInSpace}</h1>

      <h2>Everyone is Space</h2>
      {peopleInSpace.length > 0 && (
        <ul>
          {peopleInSpace.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      )}

      <h2>People on the ISS</h2>
      {peopleOnISS.length > 0 && (
        <ul>
          {peopleOnISS.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
