import "./CaixaRegistradora.css"

import { useState, useEffect } from "react"

const CaixaRegistradora = () => {

  const [valorCompra, setValorCompra] = useState("")
  const [valorPago, setValorPago] = useState("")
  const [restante, setRestante] = useState("")
  const [error, setError] = useState(false)
  const url = "http://localhost:5000/desafio/caixa"


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    let valorRegistrado = {
      valorCompra,
      valorPago
    }

    if (!valorCompra) {
      setError("O valor total da compra é obrigatório")
      return
  }

  if (!valorPago) {
      setError("É obrigatório informar o valor pago pelo cliente!") 
      return
  }

  if (valorCompra < 0 || valorPago < 0) {
      setError ("Os valores precisam ser maiores que zero")
      return
  }

  if (valorPago < valorCompra) {
      setError ("Não há troco")
      return

  }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(valorRegistrado),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(data => setRestante(data))
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
      {error && <p>{error}</p>}
      <div className="result">
          {restante >0 &&
          <p>O troco é R${restante.troco}</p>}

          {restante.nota100 >0 &&
          <p>Dê {restante.nota100} notas de R$100</p>}
           {restante.nota10 >0 &&
          <p>Dê {restante.nota10} notas de R$10</p>}
           {restante.nota1 >0 &&
          <p>Dê {restante.nota1} notas de R$1</p>}     
       
        </div>

    </div>
  )
}

export default CaixaRegistradora