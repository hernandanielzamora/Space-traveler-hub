import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

it('renders Component correctly', () => {
  const tree = render(
    <Router>
      <NavBar />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
