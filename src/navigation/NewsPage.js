import React from 'react';

const NewsPage = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  return(
    <div className="text">
      <h2> Świeże Newsy! </h2>
      <p style={{textAlign:"center"}}>{`Jest godzina ${hours<10 ? "0"+hours : hours}:${minutes<10 ? "0"+minutes : minutes}.`}</p>
    </div>
  )
}

export default NewsPage;