import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Main from '../src/Containers/Main';

describe('Main Component', () => {
  it('renders zero results when searching for "z"', () => {
    const {queryByTestId, getByPlaceholderText} = render(<Main />);
    const searchInput = getByPlaceholderText('Search...');
    fireEvent.changeText(searchInput, 'z');
    const zeroResultsComponent = queryByTestId('zero-results');
    expect(zeroResultsComponent).toBeTruthy();
  });
  it('should give you israel cube when press I', () => {
    const {getByPlaceholderText, queryByText} = render(<Main />);
    const searchInput = getByPlaceholderText('Search...');
    fireEvent.changeText(searchInput, 'I');
    expect(queryByText('Israel')).toBeTruthy();
  });
  it('should be 3 cubes when pressing m', () => {
    const {getByPlaceholderText, queryByText} = render(<Main />);
    const searchInput = getByPlaceholderText('Search...');
    fireEvent.changeText(searchInput, 'm');
    const expectedItems = ['Madrid', 'India', 'Mexico'];
    expectedItems.forEach(item => {
      expect(queryByText(item)).toBeTruthy();
    });
  });
});
