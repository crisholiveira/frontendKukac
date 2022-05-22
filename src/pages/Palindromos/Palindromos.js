import "./Palindromos.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Palindromos = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div>
      <h2>DesafioKukac</h2>
      <p className="subtitle">Desafio dos números palíndromos</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o número inicial do intervalo" />
        <input type="text" placeholder="Digite o número final do intervalo"/>
        <input type="submit" value="Exibir"/>
      </form>
      <p>Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para direita tem o mesmo valor. Exemplo: 929, 44, 97379</p>
    </div>
  )
}

export default Palindromos