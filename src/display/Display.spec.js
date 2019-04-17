// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('Display the Unlocked and Open at the top when run ', () => {
     const { getByText, queryByText } = render(<Display />)
    expect(queryByText('Locked')).toBeFalsy();
    expect(queryByText('Open')).toBeTruthy();
  })
it('should render close and locked display', () => {
      const { getByText, queryByText }= render(<Display closed={true} locked={true} />);
      expect(queryByText('Closed')).toBeTruthy();
      expect(queryByText('Locked')).toBeTruthy();
})
it('should update display the right class ie color when an event is triggered', () => {
    const { getByText, queryByText } = render(<Display open={true}/>)
    expect(getByText('Open')).toHaveClass('led green-led');
  })
 })