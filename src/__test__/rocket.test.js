import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/rockets/Rockets';
import store from '../redux/store';

it('Test RocketContainer renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Rockets />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
