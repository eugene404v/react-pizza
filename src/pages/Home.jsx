import React from 'react'

import {Categories, SortPopup, PizzaBlock} from '../components/';

function Home(props) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={[
          'Все',
          'Мясные',
          'Вегетарианская',
          'Гриль',
          'Острые',
          'Закрытые'
        ]}
          onClick={(name) => alert(name)} />
        <SortPopup items={[
          {name: 'популярности', type: 'popular'},
         {name: 'цене', type: 'price'}, 
         {name: 'алфавиту', type: 'alphabet'}
         ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        
        
        {
          props.items.map(obj => <PizzaBlock 
            key={obj.id} 
            {...obj} 
            />)
        }


      
      
      
      
      
      
      </div>
    </div>
  )
}

export default Home
