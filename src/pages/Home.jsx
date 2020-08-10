import React from 'react'

import {Categories, SortPopup, PizzaBlock} from '../components/';

function Home(props) {
  return (
    <div class="container">
      <div class="content__top">
        <Categories items={[
          'Все',
          'Мясные',
          'Вегетарианская',
          'Гриль',
          'Острые',
          'Закрытые'
        ]}
          onClick={(name) => alert(name)} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        
        
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
