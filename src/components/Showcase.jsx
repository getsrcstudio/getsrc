import PropTypes from "prop-types";
import React, { useState } from "react";
//import Project from "./Project";

const Showcase = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // Logic for displaying current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.items.slice(indexOfFirstItem, indexOfLastItem);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <select
            className="form-select"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value="8">Show 8 items</option>
            <option value="16">Show 16 items</option>
            <option value="24">Show 24 items</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {currentItems.map((element) => (
          <div className="col" key={element.id}>
            <div className="card h-100">
              <img
                className="card-img-top"
                src={element.owner.avatar_url}
                alt={element.full_name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{element.full_name}</h5>
                <p className="card-text text-truncate">{element.description}</p>
                <div className="mt-auto">
                  
                  <a
                    href={"/Project/"+element.full_name/*element.html_url*/}
                    
                    className="btn btn-primary btn-sm"
                    
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                  <span>&nbsp;&nbsp;</span>
                  <a
                    href={"https://www.youtube.com/@GetSRCstudio/search?query="+element.full_name}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === currentPage && "active"}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === pageNumbers.length && "disabled"
            }`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pageNumbers.length}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Showcase.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        full_name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        owner: PropTypes.shape({
          avatar_url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default Showcase;
