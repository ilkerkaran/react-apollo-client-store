import React from 'react';

const NumberInput = ({
  className, inputName,
  label,
  defaultValue = undefined,
  isChanged = false,
  onChange
}: {className:string,
  inputName:string,
  defaultValue:string | undefined
  label:string,
  isChanged:boolean,
  onChange:(e:any) => any}) => (
    <div className={className}>
      <input
        type="number"
        className={isChanged ? 'Input Changed' : 'Input'}
        defaultValue={defaultValue}
        placeholder={label}
        onChange={onChange}
        name={inputName}
      />
    </div>
);

export default NumberInput;
