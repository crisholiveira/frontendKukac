import "./Garagem.css"
import { useState, useEffect } from "react"

const Garagem = () => {
    
  const [numInicial, setNumInicial] = useState("")
  const [numFinal, setNumFinal] = useState("")
  const [palindromo, setPalindromo] = useState([])
  const url = "http://localhost:5000/desafio/palindromos"


  const handleSubmit = async (e) => {
    e.preventDefault();
    let intervalo = {
      numInicial,
      numFinal
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(intervalo),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(data => setPalindromo(data.palindromo))
      .catch(err => console.log(err))
  }



  return (
    <div id="palindromos">
      <h2>DesafioKukac</h2>
      <p className="subtitle">Desafio da garagem.</p>
      <p>Cadastre seu veículo!</p>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Digite o número inicial do intervalo" onChange={(e) => setNumInicial(e.target.value)} value={numInicial || ""} />
        <input type="number" placeholder="Digite o número final do intervalo" onChange={(e) => setNumFinal(e.target.value)} value={numFinal || ""} />
        <input type="submit" value="Exibir" />
      </form>
      
      <div className="result">{palindromo && palindromo.length > 0 &&
        palindromo.map(item => <p>{item}</p>)}</div>
    </div>
  )
}

export default Garagem