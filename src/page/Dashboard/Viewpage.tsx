import BookSharpIcon from '@mui/icons-material/BookSharp';
import { Box, Card } from '@mui/material'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
// import AddCourse from '../../components/AddCourse'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useState, type JSX } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "../../app/store"

const Viewpage = () => {
    const [show, setShow] = useState<boolean>(false);
    const courses = useSelector((state: RootState) => state.course.courses);

    const sidebarmenu: { id: number, title: string, icon: JSX.Element }[] = [
        {
            id: 1,
            title: "teacher",
            icon: <GridViewRoundedIcon fontSize='large' />
        },
        {
            id: 2,
            title: "teacher/Add",
            icon: <AddBoxRoundedIcon fontSize='large' />
        },
        {
            id: 3,
            title: "teacher/View",
            icon: <BookSharpIcon fontSize='large' />
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

            <Box className="dashboard_content" style={{justifyContent:"start"}}>
                <div style={{ padding: '20px',width:"60%",display:"flex",flexDirection:"column",gap:"10px" }}>
                    <h2 style={{marginBottom:"10px"}}>All Courses</h2>
                    {courses.length === 0 ? (
                        <p>No courses added yet.</p>
                    ) : (
                        courses.map((course) => (
                            <Card
                                key={course.id}
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    padding: '10px',
                                    marginBottom: '10px',
                                }}
                            >
                                <h1>{course.course}</h1>
                                <p>Faculty: {course.faculty}</p>
                                <p>Enrolled: {course.enrolled}</p>
                            </Card>
                        ))
                    )}
                </div>
            </Box>
        </Box>
    )
}

export default Viewpage;