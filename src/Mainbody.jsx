import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ForumIcon from '@mui/icons-material/Forum';
import Earningchart from "./Earningchart";

function Mainbody() {
  const Data=[
    {
      type:"EARNINGS (MONTHLY)",
      value : "$40,000",
      logo:<CalendarMonthIcon/>,
      borderColor:"rgb(2, 117, 216)"
    },
    {
      type:"EARNINGS (ANNUAL)",
      value : "$215,000",
      logo:<AttachMoneyIcon/>,
      borderColor:"rgb(92, 184, 92)"
    },
    {
      type:"TASKS",
      value : "50%",
      logo:<EventNoteIcon/>,
      borderColor:"rgb(91, 192, 222)"
    },
    {
      type:"PENDING REQUESTS",
      value : "18",
      logo:<ForumIcon/>,
      borderColor:"rgb(240, 173, 78)"
    },
  ]
  return (
    <div className="home-body">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        {
          Data.map((ele)=>(
            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card shadow h-100 py-2" style={{borderLeftColor:ele.borderColor,borderLeftWidth:"5px"}}>
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs mb-1" style={{color:ele.borderColor,fontSize:"15px"}}>
                      {ele.type}
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {ele.value}
                    </div>
                  </div>
                  <div className="col-auto" style={{color:"rgba(100,100,100,0.5)"}}>
                    {ele.logo}
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))
        }
         
        </div>
        <Earningchart></Earningchart>
      </div>
  
  );
}

export default Mainbody;
