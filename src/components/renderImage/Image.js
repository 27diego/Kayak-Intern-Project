import React, { useState, useEffect } from "react";
import "./Image.scss";

export default function Image({ imgObj }) {
  const [img, setimg] = useState({
    id: null,
    name: "",
    country: "",
    category: ""
  });

  useEffect(() => {
    setimg(imgObj);
  }, [imgObj]);

  return (
    <div className="container">
      {img.id ? (
        <React.Fragment>
          <img
            className="container__img"
            src={require(`../../assets/${img.name
              .replace(" ", "-")
              .toLowerCase()}-${img.id}.jpg`)}
            alt={img.name}
          />
          <div className="container__description">{`${img.name}, ${img.country}`}</div>
        </React.Fragment>
      ) : (
        <div></div>
      )}
    </div>
  );
}
