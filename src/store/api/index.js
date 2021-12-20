import {
  fetchWarehousesRequest,
  fetchWarehousesSuccess,
  fetchWarehousesFailure,
} from "../warehouses/actions";

export const fetchWarehouses = () => {
  return (dispatch) => {
    dispatch(fetchWarehousesRequest());
    fetch("warehouse.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        dispatch(fetchWarehousesSuccess(myJson));
      })
      .catch((err) => {
        const error_msg = err.message;
        dispatch(fetchWarehousesFailure(error_msg));
      });
  };
};
