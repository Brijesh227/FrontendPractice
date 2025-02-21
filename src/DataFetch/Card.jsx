import React, { useEffect, useState } from 'react';

function Card() {
    const [cardList, setCardList] = useState([]);

  async function fetchData() {
    const data = await fetch(
      'https://run.mocky.io/v3/90387ca2-29dc-40f6-b995-ef8693e8c9d3'
    );
    const jsonData = await data.json();
    const arraydata =
      jsonData?.flightsearchresponse?.flightjourneys?.[0]?.flightoptions?.[0]
        ?.recommendedflight?.[0]?.flightlegs;
    console.log(arraydata);
    setCardList(arraydata);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {cardList.length > 0 && cardList.map((item, index) => (
        <div key={index}>
            {item.origin}
        </div>
      ))}
    </div>
  )
}

export default Card;