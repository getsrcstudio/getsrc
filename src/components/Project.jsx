import React, { useState,  useCallback } from "react";
// const SearchMe = async () => {
//   const queryParameters = new URLSearchParams(window.location.search);
//   const search = queryParameters.get("search");

//   const url = `https://api.github.com/search/repositories?q=${search}`;
//   const response = await fetch(url, {
//     method: "GET",
//   });
//   let data = await response.json();
//   return data;
// };
export default function Project() {
  // let data = SearchMe().then((value) => {
  //   return value;
  // });
  // console.log(data);
  const [data, setData] = useState(null);
  const SearchMe = useCallback(async () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const search = queryParameters.get("search");
    //const url = `https://api.github.com/search/repositories?q=${topic}+language:${language}&sort=${sort}&order=${order}`;
    const url = `https://api.github.com/search/repositories?q=${search}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    setData(data);
  }, []);

  return (
  data= SearchMe(),  
    <>
      <div className="container" style={{ display: "flex" }}>
        <div className="details-container" style={{ flex: "1" }}>
          <h2>{data}</h2>
          <p></p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="ads-container" style={{ maxWidth: "300px" }}>
          <h2>Ads</h2>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551891622-e6a9ba943d90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="Ads"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
