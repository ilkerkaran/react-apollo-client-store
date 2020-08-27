import React from 'react';
import renderer from 'react-test-renderer';

import Text from './Text';

describe('<Text /> snapshot ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Text text="some text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
