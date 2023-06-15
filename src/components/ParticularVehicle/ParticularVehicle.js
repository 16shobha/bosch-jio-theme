import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

const ParticularVehicle = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div className='modal-dialog-centered'>
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Anomaly Occurence Timeline</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
    </div>
  </div>
</div>
            <div>
                <h3 className='heading'>Vehicle Details</h3>
                <div className='d-flex justify-content-between mx-3 mb-3'>
                <h6>Vehicle Number : V1234</h6>
                <h6>Vehicle Type : SUV</h6>
                <h6>Fuel Type : Petrol</h6>
                </div>
            </div>
            <div>
                <h3 className='heading'>Latest Anomaly Details</h3>
            </div>
            <div class="table-responsive bg-light mx-3">
                <table class="table">
                    <thead>
                        <th style={{textAlign:"center"}}>
                            Anomaly Type
                        </th>
                        <th style={{textAlign:"center"}}>
                            Severity
                        </th>
                        <th style={{textAlign:"center"}}>
                            Date of Occurence
                        </th>
                        <th style={{textAlign:"center"}}>
                           Historical results
                        </th>
                    </thead>
                    <tbody style={{textAlign:"center",justifyContent:"center"}}>
                        <tr>
                            <td>Cell Voltage Deviation</td>
                            <td>Low</td>
                            <td>25 Mar 2023</td>
                            <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">View Summary</button></td>
                        </tr>
                        <tr>
                            <td>Cell Temperature Deviation</td>
                            <td>Medium</td>
                            <td>25 Mar 2023</td>
                            <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">View Summary</button></td>
                        </tr>
                        <tr>
                            <td>Acc Aging AE</td>
                            <td>Low</td>
                            <td>25 Mar 2023</td>
                            <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">View Summary</button></td>
                        </tr>
                        <tr>
                            <td>OverTemperature AE</td>
                            <td>High</td>
                            <td>25 Mar 2023</td>
                            <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">View Summary</button></td>
                        </tr>
                        <tr>
                            <td>Over/Under Charging</td>
                            <td>High</td>
                            <td>25 Mar 2023</td>
                            <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">View Summary</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ParticularVehicle