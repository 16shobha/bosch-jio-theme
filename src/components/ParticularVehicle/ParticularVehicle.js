import React from 'react'

const ParticularVehicle = () => {
    return (
        <div>
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
                            Date Of Occurance
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
                            <td><a href="#">view summary</a></td>
                        </tr>
                        <tr>
                            <td>Cell Temperature Deviation</td>
                            <td>Medium</td>
                            <td>25 Mar 2023</td>
                            <td><a href="#">view summary</a></td>
                        </tr>
                        <tr>
                            <td>Acc Aging AE</td>
                            <td>Low</td>
                            <td>25 Mar 2023</td>
                            <td><a href="#">view Summary</a></td>
                        </tr>
                        <tr>
                            <td>OverTemperature AE</td>
                            <td>High</td>
                            <td>25 Mar 2023</td>
                            <td><a href="#">view summary</a></td>
                        </tr>
                        <tr>
                            <td>Over/Under Charging</td>
                            <td>High</td>
                            <td>25 Mar 2023</td>
                            <td><a href="#">view summary</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ParticularVehicle