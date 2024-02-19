import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "react-js-pagination";

const CustomPagination = ({ resPerPage, filteredProductsCount }) => {
  const [currentPage, setCurrentPage] = useState();

  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);

    if (searchParams.has("page")) {
      searchParams.set("page", pageNumber);
    } else {
      searchParams.append("page", pageNumber);
    }

    const path = window.location.pathname + "?" + searchParams.toString();
    navigate(path);
  };

  return (
    <div className="d-flex justify-content-center my-5">
      {filteredProductsCount > resPerPage && (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resPerPage}
          totalItemsCount={filteredProductsCount}
          onChange={setCurrentPageNo}
          nextPageText={"Next"}
          prevPageText={"Prev"}
          firstPageText={"First"}
          lastPageText={"Last"}
          itemClass="page-item"
          linkClass="page-link"
        />
      )}
    </div>
  );
};

export default CustomPagination;

































































// import React, { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const CustomPagination = ({ resPerPage, filteredProductsCount }) => {

//   let [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [updatedPage, setUpdatedPage] = useState(Number(searchParams.get("page")) || 1);



//   useEffect(() => {
//     setUpdatedPage(updatedPage + 1);
//     console.log(updatedPage)
//     if (searchParams.has("page")) {
//       searchParams.set("page", updatedPage);
//     } else {
//       searchParams.append("page", updatedPage);
//     }

//     const path = window.location.pathname + "?" + searchParams.toString();
//     navigate(path);
//   }, []);



//   return (
//     <></>
//     // <div className="d-flex justify-content-center my-5">
//     //   {filteredProductsCount > resPerPage && (
//     //     <Pagination
//     //       activePage={currentPage}
//     //       itemsCountPerPage={resPerPage}
//     //       totalItemsCount={filteredProductsCount}
//     //       onChange={setCurrentPageNo}
//     //       nextPageText={"Next"}
//     //       prevPageText={"Prev"}
//     //       firstPageText={"First"}
//     //       lastPageText={"Last"}
//     //       itemClass="page-item"
//     //       linkClass="page-link"
//     //     />
//     //   )}
//     // </div>
//   );
// };

// export default CustomPagination;