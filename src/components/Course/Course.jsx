import PropTypes from 'prop-types';
import { FaBookOpen, FaDollarSign } from 'react-icons/fa';


const Course = ({course,handleAddCourse}) => {
    // console.log(course)
    const {cover_img,title, description, course_price, course_credit} = course;



    return (
        <div className='shadow-lg m-5 px-3 py-5 w-80 space-y-4 bg-white rounded-xl'>
            <img className='w-full' src={cover_img} alt="cover image" />
            <h2 className='text-lg font-bold'>{title}</h2>
            <p className='text-sm text-gray-600 '>{description}</p>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <p><FaDollarSign></FaDollarSign></p>
                    <p className='ml-2'>Price: {course_price}</p>
                </div>
                <div className='flex items-center'>
                    {/* <img src={<FaBeer></FaBeer>} alt="" /> */}
                    <p><FaBookOpen></FaBookOpen></p>
                    <p className='ml-2'>Credit: {course_credit}hr</p>
                </div>
            </div>
            <div className=''> 
                <button onClick={() => handleAddCourse(course)} className='text-center p-2 rounded-lg text-white bg-blue-600 w-full'>Select</button>
            </div>
        </div>
    );
}

Course.propTypes = {
    course: PropTypes.object,
    handleAddCourse: PropTypes.func
}
export default Course;


