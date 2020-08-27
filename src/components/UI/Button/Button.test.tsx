import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('<Button /> snapshot ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button
        buttonType="Success"
        inputType="button"
        onClick={() => {}}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
