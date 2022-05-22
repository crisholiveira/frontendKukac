import "./Palindromos.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Palindromos = () => {
const [numInicial, setNumInicial] = useState("")
const [numFinal, setNumFinal] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const intervalo = {
      numInicial,
      numFinal
    }
    console.log(intervalo)
  }



  
  return (
    <div id="palindromos">
      <h2>DesafioKukac</h2>
      <p className="subtitle">Desafio dos números palíndromos</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o número inicial do intervalo" onChange={(e) => setNumInicial(e.target.value)} value ={numInicial || ""}/>
        <input type="text" placeholder="Digite o número final do intervalo" onChange={(e) => setNumFinal(e.target.value)} value ={numFinal || ""}/>
        <input type="submit" value="Exibir"/>
      </form>
      <p>Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para direita tem o mesmo valor. Exemplo: 929, 44, 97379</p>
    </div>
  )
}

export default Palindromos