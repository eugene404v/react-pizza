import React from 'react'


const Categories = React.memo(function Categories(props) {

  
  return (
    <div className="categories">
      <ul>
        {props.items.map((name, index) => (
          <li
            className={props.activeCategory === index ? 'active' : ''} 
            key={`${name}_${index}`}
            onClick={()=>props.onClickCategory(index)}
          >{name}</li>
        ))}
      </ul>
    </div>
  )
})

export default Categories