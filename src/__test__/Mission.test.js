import React from 'react';
import { render } from '@testing-library/react';

import Mission from '../components/missions/Mission';

it('renders Component correctly', () => {
  const tree = render(<Mission />);
  expect(tree).toMatchSnapshot();
});
