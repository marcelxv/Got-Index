import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import GridPersonagens from './components/personagens/GridPersonagens'
import MenuCasas from './components/ui/MenuCasas'
import Spinner from './components/ui/Spinner'
import Rodape from './components/ui/Rodape'

const App = () => {
  const [cards, setCards] = useState([])
  const [carregando, estaCarregando] = useState(true)
  const [query, setQuery] = useState('') // query é o que o usuário digitou
  const [casas, setCasas] = useState([])

  // useEffect é uma função que executa uma determinada função quando o componente é renderizado
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.got.show/api/show/characters/`)
      const houses = await axios(`https://api.got.show/api/show/houses`)
      console.log(result)
      console.log(houses.data)
      console.log(result.data) // loga os dados da API
      setCasas(houses.data) // seta os dados da API em casas
      setCards(result.data) // seta os dados da API no estado setCards
      estaCarregando(false) // dados coletados, pare de carregar

    }


    fetchData() // chama a função fetchData

  }, [query]) // só executa a função fetchData quando o query é alterado


  return  <div className="App">
        <Header />
        <GridPersonagens estaCarregando={carregando} cards={cards} />  {/* passa os dados do estado cards para o componente gridPersonagens */}
        <MenuCasas casas={casas} />

        <Rodape />

    </div>
}

export default App;
