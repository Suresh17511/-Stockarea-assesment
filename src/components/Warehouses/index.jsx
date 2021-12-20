import React from "react";
import Error from "../utils/Error/index.jsx";
import Loading from "../utils/Loading/index.jsx";
import "./warehouses.css";
import { Link } from "react-router-dom";

const Warehouses = (props) => {
  const { warehouses, category, categoryListItem } = props;
  const filteredCategoryData = warehouses.filteredData.filter(
    // eslint-disable-next-line
    (warehouse) => warehouse[category] == categoryListItem
  );

  const warehousesList =
    filteredCategoryData.length > 0
      ? filteredCategoryData
      : warehouses.filteredData;

  return (
    <div className="warehouses">
      {warehouses.filteredData.loading ? (
        <Loading />
      ) : warehouses.filteredData.length > 0 ? (
        <div className="warehouse_list">
          {warehousesList.map((warehouse) => (
            <Link
              to={`/${warehouse.id}`}
              className="warehouse_item"
              key={warehouse.id}
            >
              <div>{warehouse.name}</div>
            </Link>
          ))}
        </div>
      ) : (
        <Error error={warehouses.error} />
      )}
    </div>
  );
};

export default Warehouses;
