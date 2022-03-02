import React from 'react'

const MenuCasas = ({ casas }) => {

  return (
    

    <div id="casas">
          <h1>Casas</h1>
    <section className="casas">{
    casas.map(casa => ( 
      <a href={casas}><li className="casas">
        {casa.name}</li></a>
))}
</section>
</div>

    )
}


export default MenuCasas
