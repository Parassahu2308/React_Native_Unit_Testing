import {fireEvent, render, screen} from '@testing-library/react-native';
import FooterTextTouchable from '../../../src/components/ui/FooterTextTouchable';

describe('FooterTextTouchable', () => {
  it('Text should be render correctly', () => {
    const text = 'test Text';
    const {getByText} = render(<FooterTextTouchable text={text} />);
    expect(getByText(text)).toBeTruthy();
  });

  it('Should call onPress when pressed', ()=>{
    const onPressMock = jest.fn();
    render(<FooterTextTouchable onPress={onPressMock} text='Test'/>)
    const footerButton = screen.getByTestId('footer-button');
    fireEvent.press(footerButton);
    expect(onPressMock).toHaveBeenCalled();

    const footerView = screen.getByTestId('footer-view');
    fireEvent.press(footerButton);
    expect(footerView).toHaveStyle({
        position:'relative'
    });
  })
});
