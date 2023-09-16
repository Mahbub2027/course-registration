import { useEffect, useState } from "react";
import Course from "../Course/Course";


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="w-3/4">
            {/* <h3>Courses: {courses.length}</h3> */}
            <div className='grid grid-cols-3 gap-2'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;