import React, { useState, useEffect } from "react";
import { getFilteredWarehouses } from "../../store/warehouses/actions";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";

const Header = (props) => {
  const {
    warehouses,
    search,
    setSearch,
    handleSubmit,
    category,
    setCategory,
    setCategoryListItem,
    categoryListItem,
  } = props;
  const warehousesList = useSelector((state) => state.warehouses.warehouses);
  const [categoryList, setCategoryList] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCategoryListItem(e.target.value);
  };

  const handleFilter = (e) => {
    setCategory(e.target.value);
  };

  function getCategoryList(warehousesList, category) {
    let obj = {};
    var output = [];
    for (var i = 0; i < warehousesList.length; ++i) {
      output.push(warehousesList[i][category]);
    }
    output.forEach((item) => {
      obj[item] = true;
    });
    output = Object.keys(obj);
    return output;
  }

  useEffect(() => {
    setCategoryList(getCategoryList(warehouses, category));
  }, [category, warehouses]);

  useEffect(() => {
    if (category === "all") {
      dispatch(getFilteredWarehouses(warehousesList));
      setCategoryListItem("");
      setCategory("all");
      setSearch("");
    }
  }, [
    category,
    setCategory,
    warehousesList,
    setCategoryListItem,
    dispatch,
    setSearch,
  ]);

  return (
    <header>
      <div className="primary_nav">
        <div className="left">
          <h1>Warehouses</h1>
        </div>
        <div className="right">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
      <div className="secondary_nav">
        {warehouses.length > 0 && (
          <>
            <strong>Filters &nbsp;</strong>
            <select name="city" id="category" onChange={handleFilter}>
              <option value="all">All</option>
              <option value="city">City</option>
              <option value="cluster">Cluster</option>
              <option value="space_available">Space Limit</option>
            </select>
          </>
        )}

        {category !== "all" && (
          <select
            name="space_limit"
            id="space_limit"
            onChange={handleChange}
            value={categoryListItem}
          >
            <option value="1">---choose option---</option>
            {categoryList.map((list, index) => (
              <option value={list} key={index}>
                {list}
              </option>
            ))}
          </select>
        )}
      </div>
    </header>
  );
};

export default Header;
