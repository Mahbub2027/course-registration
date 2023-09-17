
// import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
// import Registrations from './components/Registrations/Registrations'


function App() {
  /* const [registrations, setRegistration] = useState([])
  // const [totalcredit, setTotalcredit] = useState(0);

  const handleAddCourse = register => {
    const isExist = registrations.find((item) => item.id==register.id);

    //let count = register.course_credit;
    let count = register.course_credit;

    if(isExist){
      alert("already Enrolled")
    }
    else{
      registrations.forEach((item) => {
        count = count + item.course_credit;
      })
        // totalcredit.forEach((item) =>{
        // const newTotalCredit = totalcredit + item.course_credit;
        // setTotalcredit(newTotalCredit);})
      
      const newCourseRegister = [...registrations, register]
      setRegistration(newCourseRegister);
    }
  
  } */

  /* const handleAddCourse = amount =>{
    const newTotalCredit = totalcredit + amount;
    setTotalcredit(newTotalCredit);
  } */


  /* const [totalcredit, setCredit] = useState(0)
  const handleAddCourse = credit =>{
    const newTotalCredit = totalcredit + credit;
    setCredit(newTotalCredit);
  } */


  return (
    <> 
      <Header></Header>
      <div className='flex justify-between '>
        
        {/* <Courses handleAddCourse= {handleAddCourse} ></Courses> */}
        <Courses></Courses>
        
        {/* <Registrations registrations={registrations}  totalcredit={totalcredit}></Registrations> */}
        {/* <Registrations></Registrations> */}
      </div>
    </>
  )
}

export default App
