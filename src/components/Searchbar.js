import React, { useState, useRef, useCallback } from "react";
import Showcase from "./Showcase";

export default function Searchbar() {
  const [data, setData] = useState(null);
  const projectRef = useRef(null);
  const languageRef = useRef(null);
  const orderRef = useRef(null);

  const SearchMe = useCallback(async () => {
    const topic = projectRef.current.value;
    const language = languageRef.current.value;
    const sort = "stars";
    const order = orderRef.current.value;
    const url = `https://api.github.com/search/repositories?q=topic:${topic}+language:${language}&sort=${sort}&order=${order}`;

    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    setData(data);
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-3">Find my Project</h2>
      <form>
        <div className="row mb-3">
          <div className="col-sm-6">
            <label htmlFor="project-name" className="sr-only">
              Project Name
            </label>
            <input
              type="text"
              className="form-control"
              id="project-name"
              placeholder="library management"
              ref={projectRef}
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="language" className="sr-only">
              Language
            </label>
            <input
              type="text"
              className="form-control"
              id="language"
              placeholder=".net,java,php,js,python"
              ref={languageRef}
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="order" className="sr-only">
              Order By
            </label>
            <select className="form-control" id="order" ref={orderRef}>
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={SearchMe}
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="result">{data && <Showcase data={data} />}</div>
    </div>
  );
}
