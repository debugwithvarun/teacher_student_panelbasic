import { Box } from '@mui/material'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import AddCourse from '../../components/AddCourse'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useState, type JSX } from 'react';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import BookSharpIcon from '@mui/icons-material/BookSharp';


const Addpage = () => {
       const [show,setShow]=useState<boolean>(false);

    const sidebarmenu : {id:number,title:string,icon:JSX.Element}[]=[
        {
            id:1,
            title:"teacher",
            icon:<GridViewRoundedIcon fontSize='large'/>
        },
        {
            id:2,
            title:"teacher/Add",
            icon:<AddBoxRoundedIcon fontSize='large'/>
        },
        {
            id:3,
            title:"teacher/View",
            icon:<BookSharpIcon fontSize='large'/>
        },
                {
            id: 4,
            title: "",
            icon: <LogoutSharpIcon fontSize='large' />
        },
    ]
  return (
        <Box className="dashboard">
            <Navbar show={show} setShow={setShow} title="Teacher Dashboard" />

            <Sidebar show={show} sidebarmenu={sidebarmenu} />

            <Box className="dashboard_content">
                <AddCourse/>
            </Box>
        </Box>
  )
}

export default Addpage