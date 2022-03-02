import React from 'react'
import logo from '../../img/logo-got.png'
const header = () => {
  return (
    <header>
      <div className="center">
        <img src={logo} alt='logo' />
        <h1>Index</h1>
      </div>
        <div className='menu'>
          <ul>
            <a href="#personagens"><li> Personagens </li></a>
            <a href="#casas"><li> Casas </li></a>
            <a href="#sobre"><li> Sobre </li></a>
            </ul>
          </div>
    </header>
  )
}

export default header