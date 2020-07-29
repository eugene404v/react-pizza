import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
  return (
    <button className={
      classNames('button',
      props.className,
      {
        'button--outline': props.outline,
      })
    }>
      {props.children}
    </button>
  )
}

export default Button;