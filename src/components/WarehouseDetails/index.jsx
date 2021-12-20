import React from "react";
import { useParams } from "react-router-dom";
import "./details.css";

const Details = (props) => {
  const { warehouse } = props;
  let { id } = useParams();
  const data = warehouse.filter((warehouse) => warehouse.id === parseInt(id));
  return (
    <div className="warehouse_details">
      {data.map((warehouse) => (
        <div key={warehouse.id} className="details_card">
          <h4>Cluster:&nbsp;{warehouse.cluster}</h4>
          <h3>{warehouse.name}</h3>
          <p>
            <b>City:&nbsp;</b>
            {warehouse.city}
          </p>
          <p>
            <b>Space Available:&nbsp;</b>
            {warehouse.space_available}
          </p>
          <p>
            <b>Warehouse Live Status:&nbsp;</b>
            {warehouse.is_live ? "True" : "False"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Details;
