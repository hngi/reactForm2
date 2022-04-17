import React, { Component } from 'react'
import Form from './Component/Form'
import Formfun from './Component/Formfun'

export class App extends Component {
  render() {
    return (
      <div className=' min-h-screen  w-full flex justify-center items-center bg-slate-600 '>
        <Form />
        {/* <Formfun /> */}
      </div>
    )
  }
}

export default App