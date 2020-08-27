import React from 'react';
import renderer from 'react-test-renderer';

import NumberInput from './NumberInput';

describe('<NumberInput /> snapshot ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<NumberInput
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
