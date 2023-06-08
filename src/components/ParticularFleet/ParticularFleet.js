import React from 'react'
import Navbar from '../Navbar/Navbar'
const ParticularFleet = () => {
    return (
        <div style={{overflowX:"hidden"}}>
            <Navbar />
            <div className='my-4'>
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
            <div className='d-flex align-items-center my-3'>
                <div>
                <h3 className='heading'>Fleet : F1</h3>
                </div>
                
                <div className='Searchadd'>
                    <input type='search' placeholder='Search'/>
                <button type='button' className='btn btn-success btn-md mx-4 buttontext'>+</button>
                </div>
                
            </div>
            <div class="table-responsive bg-light mx-3">
                <table class="table">
                    <thead>
                        <th style={{ textAlign: "center" }}>
                           Vehicle Number
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Vehicle Type
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Fuel Type
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Date
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Actions
                        </th>
                    </thead>
                    <tbody style={{ textAlign: "center", justifyContent: "center" }}>
                        <tr>
                            <td>V1234</td>
                            <td>SUV</td>
                            <td>Petrol</td>
                            <td>25 Mar 2023</td>
                            <td><i class="fa-solid fa-pen m-2"></i>
                            <i class="fa-solid fa-trash m-2"></i>
                            <i class="fa-solid fa-eye m-2"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>V2345</td>
                            <td>SUV</td>
                            <td>Diesel</td>
                            <td>24 Apr 2024</td>
                            <td><i class="fa-solid fa-pen m-2"></i>
                            <i class="fa-solid fa-trash m-2"></i>
                            <i class="fa-solid fa-eye m-2"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>V4567</td>
                            <td>SUV</td>
                            <td>Petrol</td>
                            <td>23 Feb 2024</td>
                            <td><i class="fa-solid fa-pen m-2"></i>
                            <i class="fa-solid fa-trash m-2"></i>
                            <i class="fa-solid fa-eye m-2"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>V7686</td>
                            <td>SUV</td>
                            <td>Diesel</td>
                            <td>13 Apr 2024</td>
                            <td><i class="fa-solid fa-pen m-2"></i>
                            <i class="fa-solid fa-trash m-2"></i>
                            <i class="fa-solid fa-eye m-2"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>V7686</td>
                            <td>SUV</td>
                            <td>Diesel</td>
                            <td>13 Apr 2024</td>
                            <td><i class="fa-solid fa-pen m-2"></i>
                            <i class="fa-solid fa-trash m-2"></i>
                            <i class="fa-solid fa-eye m-2"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ParticularFleet