import React from "react";
import Showcase from "./Showcase";
export let SearchMe =async ()=> {
    let topic = document.getElementById("Project_name").value;
    let language = document.getElementById("language").value;
  let sort = "stars";
  let order = "desc";

    let url1="https://api.github.com/search/repositories";
    let  queryString = `?q=topic:${topic}+language:${language}&sort=${sort}&order=${order}`;
    const url = url1 + queryString;
   let response = await fetch(url, { 
     method: "GET",
   });
   
   let data = await response.text();
 //  var count = Object.keys(data).length;
    
//    let count2=count-10;

    // console.log(data.items[0].full_name)
//     <div className="mx-3 my=3">
//     <div className='card' style={{width: "18rem"}}>
//   <img src={image} className="card-img-top" alt=""/>
//   <div className="card-body">
//     <h5 className="card-title">{data.items[0].full_name}</h5>
//     <p className="card-text">{data.items[0].description}</p>
//     <a href="/" className="btn btn-primary">show me more</a>
//   </div>
// </div>
// </div>

Showcase(data);

  
}



export default function Searchbar() {
  return (
    <div className="container">
      <div className="my-3">
        <h2>Find my Project</h2>
      </div>
      <div className="row">
        <div className="col-auto">
          <label className="form-check-label" for="Project_name">
            Project Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="library management"
            id="Project_name"
          />
        </div>

        <div className="col-auto">
          <label className="form-check-label" for="language">
            Language
          </label>
          <input
            type="text"
            className="form-control"
            placeholder=".net,java,php,js,python"
            id="language"
          />
        </div>
        <div className="col-auto my-4">
          <button
            type="submit"
            className="form-control btn btn-primary mb-3"
            onClick={SearchMe}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
