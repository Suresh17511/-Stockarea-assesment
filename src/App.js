import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Warehouses from "./components/Warehouses";
import { useDispatch, useSelector } from "react-redux";
import { fetchWarehouses } from "./store/api/index";
import { getFilteredWarehouses } from "./store/warehouses/actions";
import Details from "./components/WarehouseDetails";

function App() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState("all");
  const [categoryListItem, setCategoryListItem] = useState("");

  const warehouses = useSelector((state) => state.warehouses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWarehouses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFilteredWarehouses(filteredData));
  }, [dispatch, filteredData]);

  const handleSubmit = () => {
    setFilteredData(
      warehouses.warehouses.filter((warehouse) =>
        warehouse.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <Header
          warehouses={warehouses.filteredData}
          search={search}
          setSearch={setSearch}
          handleSubmit={handleSubmit}
          category={category}
          setCategory={setCategory}
          categoryListItem={categoryListItem}
          setCategoryListItem={setCategoryListItem}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Warehouses
                warehouses={warehouses}
                search={search}
                category={category}
                categoryListItem={categoryListItem}
              />
            }
          />
          <Route
            exact
            path="/:id"
            element={<Details warehouse={warehouses.filteredData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
