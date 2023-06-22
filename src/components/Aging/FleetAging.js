import React,{useEffect,useState} from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';

const FleetAging = () => {
    const[aging,setaging] = useState('');
    useEffect(() => {
       axios.get('http://localhost:8080/api/fleets/batteryAging').then((res)=>{
        const fleetaging = res.data;
        setaging(fleetaging);
        console.log(res.data);
       })
   }, []);
    return (
        <div>
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
                    {aging.length >0 && aging.map((item, index) => {
                            return <tr key={index}>
                            <td>{item.vehicleNumber}</td>
                            <td>{item.batteryType}</td>
                            <td>{item.batteryInstallationDate}</td>
                            <td>{item.batteryExpirationDate}</td>
                            <td>{item.agingPrediction}</td>
                        </tr>

                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FleetAging