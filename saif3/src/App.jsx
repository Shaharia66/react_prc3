import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './controlled_component'
import Input from './Controlled_comp'
import CheckBox from './Checkbox'

function App() {
  // const [count, setCount] = useState(0)
  // let a="saif";
  // let b="taif";

  return (
    <>
      {/* <h1 style={{color:"blue"}}>here start props. </h1>
      <User name={a}/>
      <User name={b}/>
      <User><p>this is a html props component</p></User>
      <User />
      <User /> */}
      {/* <Input/> */}
      <CheckBox/>
    </>
  )
}

export default App
