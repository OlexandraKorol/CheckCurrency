import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { BaseCurrency } from '../src/components/MessagesComponents';
import { CurrencyListItem } from '../src/components/CurrencyListItem';
import { CustomInput } from '../src/components/CustomInput';
import { MainNavigation } from '../src/navigation/MainMavigation';

test('Base currency is visible', () => {
  render(<BaseCurrency baseCurency={"EUR"} />);

  const baseCurrencyElement = screen.getByTestId('base-currency');
  expect(baseCurrencyElement).toBeTruthy();
});

test('Render list of currency', () => {
  const onPress = jest.fn();
  render(<CurrencyListItem isFavorite={false} code={'UAN'} value={0} onPress={onPress} />);

  const baseCurrencyElement = screen.getByTestId('curency-list-item');
  expect(baseCurrencyElement).toBeTruthy();

});


test('CustomInput works correctly', () => {
  const handleChangeText = jest.fn();
  render(<CustomInput value="UAH" onChangeText={handleChangeText} />);

  const input = screen.getByTestId('custom-input');
  fireEvent.changeText(input, 'jpy');
  expect(handleChangeText).toHaveBeenCalledWith('jpy');
});

test('Navigates to Favorites screen when button is pressed', async () => {
  render(<MainNavigation />);
  expect(screen.getByText('All currencies')).toBeTruthy();
  fireEvent.press(screen.getByText('Favorites'));

  expect(await screen.findByText('Favorites')).toBeTruthy();
});

test('Check click updates favorite', () => {
  const mockToggleFavorite = jest.fn();

  render(
    <CurrencyListItem
      isFavorite={false}
      code={'AED'}
      value={3.67}
      onPress={mockToggleFavorite}
    />
  );

  fireEvent.press(screen.getByTestId('curency-list-item'));
  expect(mockToggleFavorite).toHaveBeenCalled();
});
