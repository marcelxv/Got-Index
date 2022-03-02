import React from 'react'

const ItemPersonagem = ({ card }) => {


  return (
    <div className='card'>
        <div className= 'card-inner'>
            <div className='card-front'>
                <img src={card.image} alt={card.name} />
                </div>
                <div className='card-back'>
                    <h1>{card.name}</h1>
                    <ul>
                        <li><strong>Interpretado por:</strong> {card.actor}</li>
                        <li><strong>Casa: </strong>{card.house}</li>
                        <li><strong>Títulos: </strong>            
                        {card.titles}</li>
                        <li><strong>Filhos: </strong>{card.siblings}</li>
                    </ul>
                </div>
    </div>
    </div>
  )
}



export default ItemPersonagem