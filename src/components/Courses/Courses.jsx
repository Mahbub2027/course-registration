import { useEffect, useState } from "react";
import Course from "../Course/Course";
// import PropTypes from 'prop-types';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const [registration, setRegistration] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const handleAddCourse = register =>{
        const isExist = registration.find((item) => item.id==register.id);

        let count = register.course_credit;

        if(isExist){
            alert("Already Enrolled")
          }
        else{
            registration.forEach((item) => {
                count = count + item.course_credit;
                
              });
            //   console.log(count);

            const totalRemaining = 20 -count;

            if(count > 20){
                return alert("No credit added")
            }
            setRemaining(totalRemaining);
            setTotalCredit(count);

            const newRegister = [...registration, register]
            setRegistration(newRegister)
        }
          
    }

    return (

        <div className="flex flex-row-reverse">
            <div className="w-1/4 ml-20 mt-8">
            <p className="text-blue-600 font-bold mb-5">Credit Hour Remaining: {remaining}</p> <hr />
                    <h3 className="text-xl font-bold my-5">Course Name</h3>
                <ul className="list-decimal text-gray-500 mb-5"> 
                    {
                        registration.map((register,idx) => <li key={idx}>{register.title}</li>)
                    }        
                </ul>
                <hr />
                
                <p className="my-5">Total Credit Hour: {totalCredit}</p> <hr />
                
            </div>


            <div className="w-3/4">
  
                <div className='grid grid-cols-3 gap-10'>
                    {
                    courses.map(course => <Course 
                        key={course.id} 
                        course={course}
                        handleAddCourse={handleAddCourse}
                        // handleAddCourse2={handleAddCourse2}
                        ></Course>)
                    }
                </div>
            </div>

        </div>
                


    );
};

Courses.propTypes = {
    // handleAddCourse: PropTypes.func,
    // handleAddCourse2: PropTypes.func
}

export default Courses;