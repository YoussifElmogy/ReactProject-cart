import React from 'react'
import { useGlobalContext } from './context'
import Loader from "react-loader-spinner";
// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
    const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
             <h1>
                <Loader
        type="Oval"
        color="#00BFFF"
        height={400}
        width={100}
        timeout={5000} //3 secs
      />
             </h1>
        
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
