import React from "react";

export default function Showcase(data) {
  let props = JSON.parse(data);
  let image = "https://www.php.net/images/meta-image.png";
  console.log(props);
  return (
    <div className="mx-3 my=3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.items[0].full_name}</h5>
          <p className="card-text">{props.items[0].description}</p>
          <a href="/" className="btn btn-primary">
            show me more
          </a>
        </div>
      </div>
    </div>
  );
}
