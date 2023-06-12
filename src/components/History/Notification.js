import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../History/Notification.css'
const Notification = () => {
    return (
        <div style={{overflowX:"hidden"}}>
            <div className='my-3 mx-3'>
                <form >
                    <div className='d-flex flex-row'>
                        <div>
                            <label className='labeltext' for="fleet">Select Fleet :</label>
                        </div>

                        <div className='mx-2 my-1'>
                            <select id="fleet" name="cars">
                                <option value="">Select your option</option>
                                <option value="0">F101</option>
                                <option value="1">F102</option>
                                <option value="2">F103</option>
                                <option value="3">F105</option>
                                <option value="4">F106</option>
                                <option value="5">F107</option>
                                <option value="6">F108</option>
                                <option value="7">F109</option>
                                <option value="8">F110</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className='btn btn-sm btn-success my-3' > Submit</button>
                </form>
            </div>
            <div>
                <div class="row no-gutters justify-content-center">
                    <div class="col-sm-2 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <span><i class="fa-solid fa-bolt"></i></span>
                                <span className='spantext'>12</span>
                                <h5 className="my-3 titletext">Cell Volatge Deviation</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">   
                                <span><i class="fa-solid fa-temperature-three-quarters"></i></span>
                                <span className='spantext'>12</span>
                                <h5 className="my-3 titletext">Cell Temperature Deviation</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">
                            <span><i class="fa-solid fa-triangle-exclamation"></i></span>
                            <span className='spantext'>12</span>
                                <h5 className="my-3 titletext">Acc Aging AE</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">
                            <span><i class="fa-solid fa-temperature-high"></i></span>
                            <span className='spantext'>12</span>
                                <h5 className="my-3 titletext">Overtemp AE</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">
                                <span><i class="fa-solid fa-battery-half"></i></span>
                                <span className='spantext'>12</span>
                                <h5 className="my-3 titletext">Over/Under Charging</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <h3 className='heading'>Notification History</h3>
            </div>
            <div class="table-responsive bg-light mx-3">
                <table class="table">
                    <thead>
                        <th style={{ textAlign: "center" }}>
                            Notification Type
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Notification Level
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Vehicle Number
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Vehicle Type
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Date
                        </th>
                    </thead>
                    <tbody style={{ textAlign: "center", justifyContent: "center" }}>
                        <tr>
                            <td>Cell Voltage Deviation</td>
                            <td>Medium</td>
                            <td>V1234</td>
                            <td>SUV</td>
                            <td>25 Mar 2025</td>
                        </tr>
                        <tr>
                            <td>Cell Temperature</td>
                            <td>High</td>
                            <td>V1234</td>
                            <td>SUV</td>
                            <td>25 Mar 2025</td>
                        </tr>
                        <tr>
                            <td>Over Charging</td>
                            <td>Low</td>
                            <td>V1234</td>
                            <td>SUV</td>
                            <td>25 Mar 2025</td>
                        </tr>
                        <tr>
                            <td>Over Temperature</td>
                            <td>High</td>
                            <td>V1234</td>
                            <td>SUV</td>
                            <td>25 Mar 2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Notification