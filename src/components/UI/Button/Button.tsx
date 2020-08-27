import React from 'react';
import './Button.css';

const Button = ({
  inputType, buttonType, onClick, children
}: { inputType: 'button' | 'reset' | undefined, buttonType: 'Success' | 'Danger' | undefined, onClick: () => any, children: any}) => (
  <button
      // eslint-disable-next-line react/button-has-type
    type={inputType}
    className={['Button', buttonType].join(' ')}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
