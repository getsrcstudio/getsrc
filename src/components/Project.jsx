import React, { useState } from "react";

export default function Project() {
  const [data, setData] = useState(null);
  //  extract the full name from the url qury string
  const urlParams = new URLSearchParams(window.location.search);
  const fullName = urlParams.get("search");
  const url = `https://api.github.com/repos/${fullName}`;
  //zip file download link
  const zipUrl = `https://api.github.com/repos/${fullName}/zipball`;
  //fetch data
  React.useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);
  return (
    <div className="container my-4">
      <h2 className="text-center mb-3">Project Details</h2>
      <div className="row">
        <div className="col-sm-12">
          <h3>{data?.name}</h3>
          <p>{data?.description}</p>
          <p>
            <a href={data?.html_url} target="_blank" rel="noreferrer">
              {data?.html_url}
            </a>
          </p>
          <p>
            <a href={zipUrl} target="_blank" rel="noreferrer">
              Download Zip
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
