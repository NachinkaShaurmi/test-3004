import React from "react";
import "./pageNumber.scss";
import { setPage } from "../../actions";

const PageNumber = ({ page, dispatch, pageAmount }) => {
  return (
    <div className="page-number">
      <button
        className={
          page === 0 ? "page-number__button disabled" : "page-number__button"
        }
        onClick={() => dispatch(setPage(page - 1))}
        disabled={page === 0}
      >
        <svg className="page-number__arrow-left" viewBox="0 0 5 9">
          <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
        </svg>
      </button>

      <div className="page-number__value">Page number - {page + 1}</div>

      <button
        className={
          pageAmount === page + 1
            ? "page-number__button disabled"
            : "page-number__button"
        }
        disabled={pageAmount === page + 1}
        onClick={() => dispatch(setPage(page + 1))}
      >
        <svg className="page-number__arrow-right" viewBox="0 0 5 9">
          <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
        </svg>
      </button>
    </div>
  );
};

export default PageNumber;
