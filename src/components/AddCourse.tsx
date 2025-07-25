import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { addCourse } from "../app/features/course/courseSlice";

interface CourseInput {
  faculty: string;
  course: string;
}

let courseId = 2; // Start from 2 since you already have id: 1 in initialState

function AddCourse() {
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState<CourseInput>({
    faculty: '',
    course: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!courseData.course || !courseData.faculty) return;

    dispatch(
      addCourse({
        id: courseId++, // incrementing ID
        course: courseData.course,
        faculty: courseData.faculty,
        enrolled: 0,
      })
    );

    setCourseData({ course: '', faculty: '' });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add Course
      </Typography>

      <TextField
        label="Faculty Name"
        placeholder="Enter faculty name"
        name="faculty"
        color="warning"
        value={courseData.faculty}
        onChange={handleChange}
        fullWidth
        sx={{
          mb: 2,
          '& .MuiInputBase-input::placeholder': { color: 'white', opacity: 1 },
          '& .MuiInputBase-input': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#FFCC00' },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFCC00',
          },
        }}
      />

      <TextField
        label="Course Name"
        placeholder="Enter course name"
        name="course"
        value={courseData.course}
        onChange={handleChange}
        fullWidth
        sx={{
          mb: 2,
          '& .MuiInputBase-input::placeholder': { color: 'white', opacity: 1 },
          '& .MuiInputBase-input': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#FFCC00' },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFCC00',
          },
        }}
      />

      <Button
        variant="contained"
        onClick={handleAdd}
        style={{ backgroundColor: 'yellow', color: '#471396' }}
      >
        Add Course
      </Button>
    </Box>
  );
}

export default AddCourse;
