import React, { useEffect, useState } from "react";
import Linechart from "../Linechart";
import axios from "axios";

const ParticularVehicle = (props) => {
  const [vehiclelist, setvehiclelist] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/fleets/F1/${props.vid}/?query=${props.vid}`)
      .then((res) => {
        const allvehicles = res.data;
        setvehiclelist(allvehicles);
        console.log(res.data);
      });
  }, []);
  console.log(props.vid);
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div className="modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Anomaly Occurence Timeline
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <Linechart />
                {/* <ResponsiveContainer width="100%" height={400}>
      <BarChart
        // data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="name" fill="#8884d8" />
        <Bar dataKey="priceUsd" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer> */}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                {/* <button type="button" class="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="heading">Vehicle Details</h3>
        <div className="d-flex justify-content-between mx-3 mb-3">
          <h6>Vehicle Number : {props.vid}</h6>
          {/* {vehiclelist.length > 0 &&
              vehiclelist.map((item, index) => {
                return (
                  <><h6>Vehicle Type : {item.vehicleType}</h6>
                  <h6>Fuel Type :  {item.fuelType}</h6></>
                );
              })} */}
          <h6>Vehicle Type : {props.vtype}</h6>
          <h6>Fuel Type : {props.vfuel}</h6>
        </div>
      </div>
      <div>
        <h3 className="heading">Latest Anomaly Details</h3>
      </div>
      <div class="table-responsive bg-light mx-3">
        <table class="table">
          <thead>
            <th style={{ textAlign: "center" }}>Anomaly Type</th>
            <th style={{ textAlign: "center" }}>Severity</th>
            <th style={{ textAlign: "center" }}>Date of Occurence</th>
            <th style={{ textAlign: "center" }}>Historical results</th>
          </thead>

          <tbody style={{ textAlign: "center", justifyContent: "center" }}>
            {vehiclelist.length > 0 &&
              vehiclelist.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.deviationType}</td>
                    <td>{item.severity}</td>
                    <td>{item.date}</td>

                    <td>
                      <button
                        type="button"
                        class="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticularVehicle;
