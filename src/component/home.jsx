
import { useContext } from "react"
import CartContext  from '../countContext'
import '../App.css'

function Home() {

 const {show, setShow} = useContext(CartContext);

 const boldStyle = {
   width: 3rem,
   backgroundColor: #CCC
 }

  return (
    <>
      <div>
        home
        <div style={boldStyle}>{show}</div>
        <div>

        <button onClick = {
          () => {

            setShow("duro")
          }
        }
        >change</button>
        </div>
      </div>

    </>
  )
}

export default Home
