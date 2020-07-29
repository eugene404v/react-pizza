import React from 'react'

export default function Categories(props) {
  const [activeItem, setActiveItem] = React.useState(0)
  
  const onSelectItem = (index) => {
    setActiveItem(index)
  }
  
  return (
    <div className="categories">
      <ul>
        {props.items.map((name, index) => (
          <li
            className={activeItem === index ? 'active' : ''} 
            key={`${name}_${index}`}
            onClick={()=>onSelectItem(index)}
          >{name}</li>
        ))}
      </ul>
    </div>
  )
}
