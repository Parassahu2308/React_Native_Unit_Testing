/* eslint-disable react/react-in-jsx-scope */
import {fireEvent, render} from '@testing-library/react-native';
import CustomButton from '../../../src/components/ui/CustomButton';

// Mock the goBack function
jest.mock('../../../src/utils/NavigationUtil', () => ({
  goBack: jest.fn(),
}));

describe('CustomButton', () => {
  it('Title Should render correctly', () => {
    const title = 'Title';
    const {getByText} = render(<CustomButton title={title} />);
    expect(getByText(title)).toBeTruthy();
  });

  it('Should show indicator when loading is true', () => {
    const {getByTestId} = render(
      <CustomButton title={'Hello'} loading={true} />,
    );
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });
});
