
import './App.css'
import Courses from './components/Courses/courses'
import Header from './components/Header/Header'
import Registrations from './components/Registrations/Registrations'

function App() {

  return (
    <> 
      <Header></Header>
      <div className='flex justify-between '>
        <Courses></Courses>
        <Registrations></Registrations>
      </div>
    </>
  )
}

export default App
