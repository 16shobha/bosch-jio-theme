import React from 'react'
import Navbar from '../Navbar/Navbar'

const FleetAging = () => {
    return (
        <div>
            <Navbar />
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
            <div >
                <h3 className='heading'>Aging Status</h3>
            </div>
            <div class="table-responsive bg-light mx-3">
                <table class="table">
                    <thead>
                        <th style={{ textAlign: "center" }}>
                            Vehicle Number
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Battery Type
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Battery Installation Date
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Battery Expiration Date
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Breakdown Risk
                        </th>
                    </thead>
                    <tbody style={{ textAlign: "center", justifyContent: "center" }}>
                        <tr>
                            <td>V1234</td>
                            <td>Lithium ion</td>
                            <td>25 Mar 2019</td>
                            <td>25 Mar 2023</td>
                            <td style={{ color: "red" }}>High</td>
                        </tr>
                        <tr>
                            <td>V1234</td>
                            <td>Lithium ion</td>
                            <td>25 Mar 2018</td>
                            <td>25 Mar 2028</td>
                            <td style={{ color: "green" }}>Low</td>
                        </tr>
                        <tr>
                            <td>V1234</td>
                            <td>Lithium ion</td>
                            <td>25 Mar 2016</td>
                            <td>25 Mar 2023</td>
                            <td style={{ color: "red" }}>High</td>
                        </tr>
                        <tr>
                            <td>V1234</td>
                            <td>Lithium ion</td>
                            <td>25 Mar 2017</td>
                            <td>25 Mar 2025</td>
                            <td style={{ color: "yellow" }}>Moderate</td>
                        </tr>
                        <tr>
                            <td>V1234</td>
                            <td>Lithium ion</td>
                            <td>25 Mar 2018</td>
                            <td>25 Mar 2028</td>
                            <td style={{ color: "green" }}>Low</td>
                        </tr>
                        <tr>
                            <td>V1234</td>
                            <td>Lithium ion</td>
                            <td>25 Mar 2017</td>
                            <td>25 Mar 2025</td>
                            <td style={{ color: "yellow" }}>Moderate</td>
                        </tr>
                        <tr>
                            <td>V1234</td>
                            <td>Lithium ion</td>
                            <td>25 Mar 2019</td>
                            <td>25 Mar 2023</td>
                            <td style={{ color: "red" }}>High</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FleetAging