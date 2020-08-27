import React, { useState, useEffect } from 'react';
import {
  useQuery, useApolloClient
} from '@apollo/client';
import { FORM_DATA } from '../../apollo-client/queries';
import Form from '../../components/UI/Form/Form';

const inputConfigs = [{
  name: 'inputText1',
  inputType: 'text',
  label: 'text label'
},
{
  name: 'inputNumber1',
  inputType: 'number',
  label: 'number label'
},
{
  name: 'inputText2',
  inputType: 'text',
  label: 'text 2 label'
}];

const FormSample = () => {
  const client = useApolloClient();
  const { data } = useQuery(FORM_DATA);
  const [isSubmited, setSubmited] = useState(false);
  const onSubmithandle = (d:any) => {
    client.writeQuery({ query: FORM_DATA, data: { formData: { ...d } } });
    setSubmited(true);
  };
  const elements = inputConfigs.map((c) => ({
    ...c,
    defaultValue: data.formData[c.name].defaultValue,
    submitedValue: data.formData[c.name].value
  }));
  useEffect(() => {
  }, [data]);
  return (
    <Form
      title="Form Title"
      onSubmit={onSubmithandle}
      submitButtonText="Send"
      inputConfigs={elements}
      isSubmited={isSubmited}
    />
  );
};

export default FormSample;
