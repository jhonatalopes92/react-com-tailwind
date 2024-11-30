import image from "./assets/fitness-tracker-animate.svg"
import { FaWeightHanging } from "react-icons/fa6"

function App() {
  

  return (
    <div className="w-full h-screen flex bg-black">
      <div className="w-[50%] h-full flex items-center justify-center">
        <img src={image} alt="" width={600}/>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[60%] h-auto min-h-[60%] p-[20px] rounded-lg flex flex-col bg-[#1f1f1f]">
          <div className="w-full flex flex-col ">
            <h1 className="text-white text-[35px] font-bold">Calculadora - IMC</h1>
          </div>
          <div className="w-[200px] h-[4px] rounded-lg bg-[#20a54c]"></div>
          <div className="w-full flex flex-col">
            <div className="mt-4">
              <label htmlFor="" className="text-white text-[18px]">Peso</label>
              <div className="w-full flex bg-[#555555] rounded-md h-[40px]">
                <div className="w-[10%] h-full flex items-center justify-center">
                  <FaWeightHanging size={24} color="#b0b0b0ff"/>
                </div>
                <div className="w-[80%] h-full">
                  <input type="text" />
                </div>
                <div className="w-[10%] h-full flex items-center justify-center">
                  <p>Kg</p>
                </div>
              </div>
            </div>
          </div>
          <div className="fim">

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
