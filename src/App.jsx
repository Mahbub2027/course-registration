
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
// import '@sweetalert2/themes/dark/dark.scss';
// import Registrations from './components/Registrations/Registrations'


function App() {

  return (
    <> 
      <Header></Header>
      <div className='flex justify-between '>
        <Courses></Courses>
        
      </div>
    </>
  )
}

export default App
