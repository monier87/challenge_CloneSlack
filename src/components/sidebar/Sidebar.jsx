import { useEffect, useState } from 'react'
import '../sidebar/Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from "../SidebarOption/SidebarOption"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from '../../firebase'
import { useStateValue } from '../../StateProvider';

function Sidebar() {

const [channels, setchannels] = useState([]);
const [{user}] = useStateValue();


useEffect(()=>{
    db.collection('rooms').onSnapshot(snapshot => (
        setchannels(
            snapshot.docs.map(doc=>({
                id: doc.id,
                name:doc.data().name
            }))
        )
    ))
},[])




  return (
    <div className = "sidebar">
        <div className = "sidebar__header">
            <div className = "sidebar__info">
            <h2>Carlos Monier</h2>
            <h3>
                <FiberManualRecordIcon />
               {user?.displayName}
            </h3>
        </div>
        <CreateIcon/>
        

    </div>
    
    <SidebarOption Icon = {BookmarkBorderIcon} title = "Channel browser" />
    <SidebarOption Icon = {PeopleAltIcon} title = "People & user groups" />
    <SidebarOption Icon = {AppsIcon} title = "Apps" />
    <SidebarOption Icon = {FileCopyIcon} title = "File browser " />
    <SidebarOption Icon = {ExpandLessIcon} title = "Show less" />
    <hr/>
    <SidebarOption Icon = {ExpandMoreIcon} title = "Channels" />
    <hr/>
    <SidebarOption Icon = {AddIcon} addChannelOption title = "Add channels" />
    


    {/* {connect to dB and list all the channels} */}
    {/* <SidebarOption .../> */}
    {channels.map(
        channel=>(
        <SidebarOption title = {channel.name} id = {channel.id}/>))}
   
    </div>
  )
}

export default Sidebar