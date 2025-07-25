import { createSlice } from "@reduxjs/toolkit"; // ✅ Fix: Add PayloadAction

interface Course {
  id: number;
  course: string;
  faculty: string;
  enrolled: number;
}

interface CourseState {
  courses: Course[];
}

const initialState: CourseState = {
  courses: [],
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
addCourse: (state, action) => {
  state.courses.push(action.payload);
  console.log(action.payload)
},
enrollCourse: (state, action) => {
  const course = state.courses.find(c => c.id === action.payload);
  if (course) {
    course.enrolled += 1;
  }
}
  },
});

export const { addCourse, enrollCourse } = courseSlice.actions;
export default courseSlice.reducer;
