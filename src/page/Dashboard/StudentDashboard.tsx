import { Box,Typography } from "@mui/material";
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar";
import "./dashboard.scss"
import DifferenceRoundedIcon from '@mui/icons-material/DifferenceRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

import { useState, type JSX } from "react";
const StudentDashboard = () => {
    const [show, setShow] = useState<boolean>(false);

    const sidebarmenu: { id: number, title: string, icon: JSX.Element }[] = [
        {
            id: 1,
            title: "student",
            icon: <GridViewRoundedIcon fontSize='large' />
        },
        {
            id: 2,
            title: "student/courses",
            icon: <DifferenceRoundedIcon fontSize='large' />
        },
   
        {
            id: 3,
            title: "",
            icon: <LogoutSharpIcon fontSize='large' />
        },
    ];
  return (
            
        <Box className="dashboard">
            <Navbar show={show} setShow={setShow} title="Student Dashboard" />

            <Sidebar show={show} sidebarmenu={sidebarmenu} />

                        <Box className="dashboard_content">
                <Typography variant="h4" className="dashboard_title">
                    Welcome to Student Dashboard
                </Typography>
            </Box>
        </Box>
  )
}

export default StudentDashboard