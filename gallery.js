import React from "react";

export default ({ images }) => {
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        paddingLeft: "0px",
        height: "300px",
        margin: "10px auto"
      }}
    >
      {images.map(image => (
        <li key={Math.random()} style={{ margin: "8px" }}>
          <img
            src={image.url}
            alt={image.alt}
            style={{ width: "300px", height: "200px", objectFit: "contain" }}
          />
        </li>
      ))}
    </ul>
  );
};
