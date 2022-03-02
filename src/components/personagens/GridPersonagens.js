import React from 'react'
import ItemPersonagem from './ItemPersonagem'
import Spinner from '../ui/Spinner'



const GridPersonagens = ({estaCarregando, cards}) => {
  return estaCarregando ? (<Spinner />
    ) : (
      <div id="personagens">
      <h1>Personagens</h1>
    <section className="cards">{cards.map(card => (
        <ItemPersonagem key={card.char_id} card={card} />
  ))
  
  }
  </section>
  </div>
    )
}


  export default GridPersonagens