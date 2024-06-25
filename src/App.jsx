import './App.css'
import dragEnd from './utils/onDragEnd'

function App() {
  

  return (
      <div onWheel={dragEnd}>
        <img src={"/image1.jpg"} alt="header" />
        <img src={"/image2.jpg"}  alt="body1" />
        <img src={"/image3.jpg"} alt="body2" />
        <img src={"/image4.jpg"}  alt="body3" />
      </div>
  )
}

export default App
