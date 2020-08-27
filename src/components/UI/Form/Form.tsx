import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import TextInput from './TextInput/TextInput';
import './Form.css';
import Text from '../Text/Text';
import NumberInput from './NumberInput/NumberInput';

const Form = ({
  title, onSubmit,
  submitButtonText,
  inputConfigs, isSubmited
}: {
  title:string, onSubmit:
  (data:any)=>any | undefined,
  submitButtonText:string | undefined,
isSubmited:boolean,
  inputConfigs:Array<any>}) => {
  const [elementObj, setElements] = useState();
  const onSubmitHandler = () => {
    const data:{[key: string]: any} = {};
    Object.keys(elementObj).forEach((k) => {
      data[k] = {
        value: elementObj[k].value,
        defaultValue: elementObj[k].defaultValue
      };
    });
    onSubmit(data);
  };
  const onInputChange = (e:any) => {
    setElements({
      ...elementObj,
      [e.target.name]: {
        ...elementObj[e.target.name],
        value: e.target.value,
        isChanged: true
      }
    });
  };
  const formElements = !elementObj
    ? <></>
    : Object.keys(elementObj).map((k) => {
      const c = elementObj[k];
      switch (c.inputType) {
        case 'text':
          return (
            <React.Fragment key={c.name}>
              <TextInput
                className="Input Text"
                inputName={c.name}
                label={c.label}
                defaultValue={c.defaultValue}
                onChange={onInputChange}
                isChanged={c.isChanged}
              />
              <Text text={c.submitedValue} />
            </React.Fragment>
          );
        case 'number':
          return (
            <React.Fragment key={c.name}>
              <NumberInput
                className="Input Text"
                inputName={c.name}
                label={c.label}
                defaultValue={c.defaultValue}
                onChange={onInputChange}
                isChanged={c.isChanged}
              />
              <Text text={c.submitedValue} />
            </React.Fragment>
          );
        default:
          return (
            <React.Fragment key={c.name}>
              <TextInput
                className="Input Text"
                inputName={c.name}

                label={c.label}
                defaultValue={c.defaultValue}
                onChange={onInputChange}
                isChanged={c.isChanged}
              />
              <Text text={c.submitedValue} />
            </React.Fragment>
          );
      }
    });

  useEffect(() => {
    setElements(Object.assign({}, ...inputConfigs.map((x) => ({
      [x.name]: {
        ...x,
        value: isSubmited ? x.submitedValue : x.defaultValue,
        isChanged: false
      }
    }))));
  }, [inputConfigs]);
  return (
    <div className="Form">
      <h4>{title}</h4>
      <form>
        {formElements}
        <Button key="Button" onClick={onSubmitHandler} inputType="button" buttonType="Success">
          {' '}
          {submitButtonText || 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default Form;
