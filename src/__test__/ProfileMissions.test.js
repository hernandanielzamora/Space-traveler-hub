import React from 'react';
import { render } from '@testing-library/react';
import ProfileMissions from '../components/profile/ProfileMissions';

it('renders Component correctly', () => {
  const tree = render(<ProfileMissions />);
  expect(tree).toMatchSnapshot();
});
