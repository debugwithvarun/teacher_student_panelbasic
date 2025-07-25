import { Box, Button, Card } from '@mui/material'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Navbar from '../../components/Navbar'
import DifferenceRoundedIcon from '@mui/icons-material/DifferenceRounded';
import Sidebar from '../../components/Sidebar'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enrollCourse } from '../../app/features/course/courseSlice'; // ✅ Import action
// import { RootState } from "../../app/store";

const Enrolledpage = () => {
    const [show, setShow] = useState<boolean>(false);
    const courses = useSelector((state: RootState) => state.course.courses);
    const dispatch = useDispatch();

    const sidebarmenu = [
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

    const handleEnroll = (id: number) => {
        console.log("hello")
        dispatch(enrollCourse(id));
        console.log("hello2")
    };

    return (
        <Box className="dashboard">
            <Navbar show={show} setShow={setShow} title="Student Dashboard" />
            <Sidebar show={show} sidebarmenu={sidebarmenu} />

            <Box className="dashboard_content" style={{ justifyContent: "start" }}>
                <div style={{ padding: '20px', width: "60%", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <h2 style={{ marginBottom: "10px" }}>All Courses</h2>
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
                                <Button
                                    variant="contained"
                                    disabled={course.enrolled > 0} 
                                    onClick={() => handleEnroll(course.id)} 
                                >
                                    {course.enrolled > 0 ? "Already Enrolled" : "Enroll"}
                                </Button>
                            </Card>
                        ))
                    )}
                </div>
            </Box>
        </Box>
    );
};

export default Enrolledpage;
