import "./CaixaRegistradora.css"

import { useState, useEffect } from "react"

const CaixaRegistradora = () => {

  const [valorCompra, setValorCompra] = useState("")
  const [valorPago, setValorPago] = useState("")
  const [restante, setRestante] = useState([])
  const url = "http://localhost:5000/desafio/caixa"


  const handleSubmit = async (e) => {
    e.preventDefault();
    let valorRegistrado = {
      valorCompra,
      valorPago
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(valorRegistrado),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(data => setRestante(data.restante))
      .catch(err => console.log(err))

    setValorCompra("")
    setValorPago("")
  }



  return (
    <div id="palindromos">
      <h2>DesafioKukac</h2>
      <p className="subtitle">Desafio da caixa registradora.</p>
      <p>Este caixa possui apenas notas de R$1,00, R$10,00 ou R$100,00 para troco ao cliente.</p>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Digite o valor total da compra" onChange={(e) => setValorCompra(e.target.value)} value={valorCompra || ""} />
        <input type="number" placeholder="Digite o valor pago pelo cliente" onChange={(e) => setValorPago(e.target.value)} value={valorPago || ""} />
        <input type="submit" value="Exibir" />
      </form>

      <div className="result"></div>
    </div>
  )
}

export default CaixaRegistradora