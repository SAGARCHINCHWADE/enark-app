import React from "react";
import { useState } from "react";
import './Pagenation.css'

const Pagenation = ({ Country }) => {
  const [page, setPage] = useState(1);
//   const[Pagecount,setPagecount]=useState(0)

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div className="pagination_container">
      <h1 className="Heading">COUNTRY</h1>
      <div className="products__container">
        {Country.slice(page * 5 - 5, page * 5).map((ele) => (
          <div key={ele.country_id} className="element">
            <div className="Ct_element">{ele.country_name}</div>
          </div>
        ))}
      </div>
      {Country.length > 0 && (
        <div className="Page_Slider_container">
         <span className="Page_arrow" onClick={() => setPage(page - 1)}>◀</span>
          {[Country.length / 5].map((_, i) => {
            return (
              <span
                key={[Country.length / 10]}
                className={page === i - 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {page}
              </span>
            );
          })}
           <span  className="Page_arrow" onClick={() => setPage(page + 1)}>▶</span> 
        </div>
      )}
    </div>
  );
};

export default Pagenation;
