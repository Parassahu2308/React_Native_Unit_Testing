/* eslint-disable react/react-in-jsx-scope */
import {act, fireEvent, render} from '@testing-library/react-native';
import Input from '../../../src/components/ui/Input';

describe('Input', () => {
  const mockOnChangetext = jest.fn();
  const mockOnBlur = jest.fn();
  const mockOnFocus = jest.fn();

  it('Should Render correcctly', () => {
    const {getByTestId} = render(
      <Input
        value=""
        testID="textInput"
        onChangeText={mockOnChangetext}
        placeholder="Enter Text"
      />,
    );
    expect(getByTestId('textInput')).toBeTruthy();
  });

  it('Should hanlde mulitple focus and blur', () => {
    const {getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChangetext}
        placeholder="Enter Text"
        onBlur={mockOnBlur}
        onFocus={mockOnFocus}
      />,
    );
    fireEvent(getByTestId('textInput'), 'focus', {});
    fireEvent(getByTestId('textInput'), 'blur', {});
    fireEvent(getByTestId('textInput'), 'focus', {});
    fireEvent(getByTestId('textInput'), 'blur', {});

    expect(mockOnFocus).toHaveBeenCalledTimes(2);
    expect(mockOnBlur).toHaveBeenCalledTimes(2);
  });

  it('Should display error text', () => {
    const {getByText} = render(
      <Input
        value=""
        onChangeText={mockOnChangetext}
        placeholder="Enter Text"
        error={'This is an error'}
      />,
    );

    expect(getByText('This is an error')).toBeTruthy();
  });

  it('Should apply disabled style', () => {
    const {getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChangetext}
        placeholder="Enter Text"
        disabled={true}
      />,
    );

    const inputContainer = getByTestId('parent');
    expect(inputContainer).toHaveStyle({pointerEvents: 'none'});

    const textInput = getByTestId('textInput');
    expect(textInput.props.editable).toBe(false);
  });

  it('Should call onFocus and setFocus state', () => {
    const {getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChangetext}
        placeholder="Enter Text"
        onFocus={mockOnFocus}
      />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'focus', {});
    });

    expect(mockOnFocus).toHaveBeenCalled();
  });

  it('Should call onBlur and setBlur State', () => {
    const {getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChangetext}
        placeholder="Enter Text"
        onBlur={mockOnBlur}
      />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'blur', {});
    });

    expect(mockOnBlur).toHaveBeenCalled();
  });

  it('Should call default on Focus', () => {
    const {getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChangetext}
        placeholder="Enter Text"
      />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'focus', {});
    });

    //   expect(mockOnFocus).toHaveBeenCalled();
  });

  it('Should call default on blur', () => {
    const {getByTestId} = render(
      <Input
        value=""
        onChangeText={mockOnChangetext}
        placeholder="Enter Text"
      />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'blur', {});
    });

    //   expect(mockOnFocus).toHaveBeenCalled();
  });
});
