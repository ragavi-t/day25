import * as React from 'react';
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SideBar() {
  const matches = useMediaQuery('(min-width:670px)');

  return <span>{matches===true?<div className="side-Nav">
  <ul className="content-list">
    <li>
      <p className="admin-name">
        SB AMIN<sup>2</sup>
      </p>
    </li>
    <hr />
    <li className="options"><SpeedIcon/>Dashboard</li>
    <hr />
    <li>
      <span className="features">Interface</span>
      <li className="options" ><button><SettingsIcon/><span>Components</span><NavigateNextIcon className="navigate"/></button></li>
      <li className="options"><button><BuildIcon/><span>Utilities</span><NavigateNextIcon className="navigate"/></button></li>
    </li>
    <hr />
    <li><span className="features">Addons</span>
    <li className="options" ><button><FolderIcon/><span>Pages</span><NavigateNextIcon className="navigate"/></button></li>
      <li className="options"><button><ShowChartIcon/><span>Charts</span></button></li>
      <li className="options" ><button><TableChartIcon/><span>Tables</span></button></li>
      
    </li>
  </ul>
</div>:<button className='toggle-button'><MenuOpenIcon /></button>}</span>;
}