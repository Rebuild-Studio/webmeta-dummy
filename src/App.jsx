import { useRef } from 'react'
import './App.css'
import useWheel from './utils/useWheel'

function App() {
  // const [singleton,setSingleton] = useState(Singleton.getInstance())
  
  // const handleDrag = useCallback(() => {  
  //   singleton.drag()
  // },[singleton])

  // return (
  //     <div onWheel={handleDrag}>
  //       <img src={"/image1.jpg"} alt="header" />
  //       <img src={"/image2.jpg"}  alt="body1" />
  //       <img src={"/image3.jpg"} alt="body2" />
  //       <img src={"/image4.jpg"}  alt="body3" />
  //     </div>
  // )

  const ref = useRef(null);
  useWheel(ref);
  return (
    <div ref={ref}>
      <img src={"/image1.jpg"} alt="header" />
      <img src={"/image2.jpg"} alt="body1" />
      <img src={"/image3.jpg"} alt="body2" />
      <img src={"/image4.jpg"} alt="body3" />
    </div>
  )
}

export default App
