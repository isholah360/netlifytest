
import './App.css'
import Home from './component/home'
import {CartProvider} from './countContext'


function App() {

  return (

    <>
    <CartProvider>
      <div>
          Hello netlify
          <Home/>
      </div>
      </CartProvider>

    </>

  )
}

export default App
