import image from "./assets/fitness-tracker-animate.svg";
import { FaWeightHanging } from "react-icons/fa6";
import { FaRuler } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const[peso, setPeso] = useState(0);
  const[altura, setAltura] = useState(0);
  const[loading, setLoading] = useState(false);
  const[resultado, setResultado] = useState("");
  const[menssagem, setMenssagem] = useState("");

  function clickCalcular(){
    if(!peso || !altura){
      toast.info("Preencha todos os campos")
      return
    }
    setLoading(true)
    const valorImc = peso / (altura * altura)

    if(valorImc < 18.5){
      setMenssagem("Vocâ está desnutrido")
    }else if(valorImc >= 18.5 && valorImc <= 24.9){
      setMenssagem("Você está no peso ideal")
    }else if(valorImc >= 25 && valorImc <= 29.9){
      setMenssagem("Você está com sobre peso")
    }else if(valorImc >=30 && valorImc <= 34.9){
      setMenssagem("Você está com oobesidade nível 1")
    }else if(valorImc >= 35 && valorImc <= 39.9){
      setMenssagem("Você está com obesidade grau 2")
    }else{
      setMenssagem("Você está com obesidade nivel 3")
    }
    
    setTimeout(
      () => {
        setLoading(false)
        setResultado(valorImc.toFixed(2))
      }, 1500
    )
  }

  return (
    <div className="w-full h-screen flex bg-black">
      <ToastContainer/>
      <div className="w-[50%] h-full flex items-center justify-center">
        <img src={image} alt="" width={600}/>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[60%] h-auto p-[20px] rounded-lg flex flex-col bg-[#1f1f1f]">
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
                  <input className="w-full h-full bg-transparent border-none outline-none text-white"  type="number" 
                  onChange={
                    (event) => setPeso(event.target.value)
                  }
                  />
                </div>
                <div className="w-[10%] h-full flex items-center justify-center">
                  <p className="text-white">Kg</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="" className="text-white text-[18px]">Altura</label>
              <div className="w-full flex bg-[#555555] rounded-md h-[40px]">
                <div className="w-[10%] h-full flex items-center justify-center">
                  <FaRuler size={24} color="#b0b0b0ff"/>
                </div>
                <div className="w-[80%] h-full">
                  <input className="w-full h-full bg-transparent border-none outline-none text-white"  type="number"
                  onChange={
                    (event) => setAltura(event.target.value)
                  }
                  />
                </div>
                <div className="w-[10%] h-full flex items-center justify-center">
                  <p className="text-white">m</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <button className="w-full h-[40px] bg-[#20a54c] rounded-lg text-white mt-4"
            onClick={clickCalcular}
            >
              {
                loading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[24px] h-[24px] border-2 border-t-[4px] border-white rounded-full animate-spin"></div>
                  </div>
                ) : "calcular"
              }
            </button>
          </div>
          {
            resultado && (
              <div className="w-full flex justify-center flex-col">
                <div className="w-full bg-gray-400 h-[1px] mt-4"></div>
                <div className="w-full py-4 flex">
                  <div className="flex w-[20%] flex-col items-center justify-center">
                    <p className="text-[40px] text-[#20a54c]">{resultado}</p>
                    <p className="text-white text-[18px]">Seu IMC</p>
                  </div>
                  <div className="w-[80%] flex items-center justify-center">
                    <p className="text-[17px] text-white">{menssagem}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-400 h-[1px] mt-4"></div>
                <div className="w-full flex items-center justify-center">
                  <a className="decorate-[0] text-[#20a54c] mt-4" href="">Mais informações sobre o IMC</a>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
