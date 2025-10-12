import './App.css'
import LoginClass from './components/LoginClass'
import Todos from './components/Todos'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
    {/* user={{uname: 'Musfir', type: 'Admin'}} */}
    <Welcome user={{uname: "Musfir", type: ''}} ></Welcome>

    <div className='m-10' ></div>
{/* <LoginClass></LoginClass> */}
<Todos></Todos>
    </>
  )
}

export default App
