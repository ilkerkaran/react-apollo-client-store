import React from 'react';

const Text = ({ text = undefined }:{text:string | undefined }) => (

  <p>{text}</p>

);

export default Text;
