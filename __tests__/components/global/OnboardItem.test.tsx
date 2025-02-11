/* eslint-disable react/react-in-jsx-scope */
import {render} from '@testing-library/react-native';
import OnboardItem from '../../../src/components/global/OnboardItem';

describe('OnboardItem', () => {
  const mockOnPressFrist = jest.fn();
  const mockOnPressSecond = jest.fn();
  const imageSource = {uri: 'http://gif.png'};
  const title = 'Test Title';
  const subTitle = 'Test Subtitle';
  const firstButtonText = 'Frist Button';
  const secondButtonText = 'Second Button';

  it('Should render correctly with one button', () => {
    const {getByText, getByTestId} = render(
      <OnboardItem
        title={title}
        imageSource={imageSource}
        subtitle={subTitle}
        buttonTitleFirst={firstButtonText}
        onPressFirst={mockOnPressFrist}
      />,
    );
    expect(getByText(title)).toBeTruthy();
    expect(getByText(title)).toBeTruthy();
    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('background-image')).toBeTruthy();
  });

  it('Should render correctly with two button', () => {
    const {getByText, getByTestId} = render(
      <OnboardItem
        title={title}
        imageSource={imageSource}
        subtitle={subTitle}
        buttonTitleFirst={firstButtonText}
        onPressFirst={mockOnPressFrist}
        buttonTitleSecond={secondButtonText}
        onPressSecond={mockOnPressSecond}
      />,
    );
    expect(getByText(title)).toBeTruthy();
    expect(getByText(title)).toBeTruthy();
    expect(getByText(firstButtonText)).toBeTruthy();
    expect(getByText(secondButtonText)).toBeTruthy();
    expect(getByTestId('background-image')).toBeTruthy();
  });
});
