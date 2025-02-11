/* eslint-disable react/react-in-jsx-scope */
import {render} from '@testing-library/react-native';
import CustomSafeAreaScrollView from '../../../src/components/global/CustomSafeAreaViewScroll';
import {Text} from 'react-native';

describe('CustomSafeAreaViewScroll', () => {
  it('Children should render correctly', () => {
    const {getByText} = render(
      <CustomSafeAreaScrollView>
        <Text>{'Hello'}</Text>
      </CustomSafeAreaScrollView>,
    );
    expect(getByText('Hello')).toBeTruthy();
  });
});
