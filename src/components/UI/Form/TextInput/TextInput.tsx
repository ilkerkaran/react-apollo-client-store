import React from 'react';

const TextInput = ({
  className,
  inputName,
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
        className={isChanged ? 'Input Changed' : 'Input'}
        type="text"
        placeholder={label}
        onChange={onChange}
        name={inputName}
        defaultValue={defaultValue}
      />
    </div>
);

export default TextInput;
