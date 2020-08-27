import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from './TextInput';

describe('<TextInput /> snapshot ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TextInput
        className=""
        defaultValue=""
        inputName=""
        isChanged={false}
        label="label"
        onChange={() => {}}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
