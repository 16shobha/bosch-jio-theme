import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Landing/LandingPage.css'

const LandingPage = () => {
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div>
                <h3 className='heading'>Fleet Management</h3>
                </div>
                
                <div className='Searchadd'>
                    <input type='search' placeholder='Search'/>
                <button type='button' className='btn btn-success btn-md mx-4 buttontext'>+</button>
                </div>
                
            </div>
            <div class="table-responsive bg-light mx-3">
                <table class="table">
                    <thead>
                        <th style={{textAlign:"center"}}>
                            Fleet ID
                        </th>
                        <th style={{textAlign:"center"}}>
                            Vehicle Count
                        </th>
                        <th style={{textAlign:"center"}}>
                            Date & Time
                        </th>
                        <th style={{textAlign:"center"}}>
                           Actions
                        </th>
                    </thead>
                    <tbody style={{textAlign:"center",justifyContent:"center"}}>
                        <tr>
                            <td>F101</td>
                            <td>15</td>
                            <td>25 Mar 2023, 9:30 AM</td>
                            <td><i class="fa-solid fa-pen m-2"></i>
                            <i class="fa-solid fa-trash m-2"></i>
                            <i class="fa-solid fa-eye m-2"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>F104</td>
                            <td>45</td>
                            <td>25 Mar 2023, 9:30 AM</td>
                            <td><i class="fa-solid fa-pen m-2"></i>
                            <i class="fa-solid fa-trash m-2"></i>
                            <i class="fa-solid fa-eye m-2"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>F109</td>
                            <td>24</td>
                            <td>25 Mar 2023, 9:30 AM</td>
                            <td><i class="fa-solid fa-pen m-2"></i>
                            <i class="fa-solid fa-trash m-2"></i>
                            <i class="fa-solid fa-eye m-2"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>F111</td>
                            <td>30</td>
                            <td>25 Mar 2023, 9:30 AM</td>
                            <td><i class="fa-solid fa-pen m-2"></i>
                            <i class="fa-solid fa-trash m-2"></i>
                            <i class="fa-solid fa-eye m-2"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>F112</td>
                            <td>25</td>
                            <td>25 Mar 2023, 9:30 AM</td>
                            <td><i class="fa-solid fa-pen m-2"></i>
                            <i class="fa-solid fa-trash m-2"></i>
                            <i class="fa-solid fa-eye m-2"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>F112</td>
                            <td>25</td>
                            <td>25 Mar 2023, 9:30 AM</td>
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

export default LandingPage