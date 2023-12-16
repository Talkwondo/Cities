//@ts-ignore
import React = require('react');
import renderer from 'react-test-renderer';
import {ZeroResults} from '../src/Components/ZeroResults';
describe('Snapshot', () => {
  it('to match snapshot', () => {
    const component = renderer.create(<ZeroResults />);
    const match = component.toJSON();
    expect(match).toMatchSnapshot();
  });
});
