import React from 'react'
import Navbar from '../Navbar/Navbar'

const FleetAging = () => {
    return (
        <div>
            <Navbar />
            <div className='heading'>
                <span>Select Fleet :</span>
            </div>
            <div className='heading'>
                <h3>Aging Status</h3>
            </div>
            <div class="table-responsive bg-light mx-3">
                <table class="table">
                    <thead>
                        <th style={{textAlign:"center"}}>
                            Vehicle Number
                        </th>
                        <th style={{textAlign:"center"}}>
                            Battery Type
                        </th>
                        <th style={{textAlign:"center"}}>
                            Battery Installation Date
                        </th>
                        <th style={{textAlign:"center"}}>
                           Battery Expiration Date
                        </th>
                        <th style={{textAlign:"center"}}>
                           Breakdown Risk
                        </th>
                    </thead>
                    <tbody style={{textAlign:"center",justifyContent:"center"}}>
                        <tr>
                        <td>V1234</td>
                        <td>Lithium ion</td>
                        <td>25 Mar 2019</td>
                        <td>25 Mar 2023</td>
                        <td>High</td>
                        </tr>
                        <tr>
                        <td>V1234</td>
                        <td>Lithium ion</td>
                        <td>25 Mar 2018</td>
                        <td>25 Mar 2028</td>
                        <td>Low</td>
                        </tr>
                        <tr>
                        <td>V1234</td>
                        <td>Lithium ion</td>
                        <td>25 Mar 2016</td>
                        <td>25 Mar 2023</td>
                        <td>High</td>
                        </tr>
                        <tr>
                        <td>V1234</td>
                        <td>Lithium ion</td>
                        <td>25 Mar 2017</td>
                        <td>25 Mar 2025</td>
                        <td>Moderate</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FleetAging