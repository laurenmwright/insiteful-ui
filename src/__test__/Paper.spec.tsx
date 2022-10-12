import React from 'react';
import { render, screen} from '@testing-library/react';
import { Paper } from '../components/Paper/Paper';
import { Button, Heading1 } from '../components';

test('correctly renders paper with a white background', () => {
  
  const {getByTestId} = render(<Paper children="It's got the juice!" />)
  const PaperElement = getByTestId("Paper-Div"); 
  expect(PaperElement).toHaveStyle({backgroundColor:"#white"})
});

test('accepts all types of children', () => {
  const {getByTestId} = render(
  <Paper>
      <Button primary>Button 1</Button>
  
      <Heading1>It's got the Juice!</Heading1>
      
      <Button secondary>Button 2</Button>
  </Paper>)

  const PaperElement = getByTestId("Paper-Div");
  const PaperChild1 = screen.getByText("Button 1");
  const PaperChild2 = screen.getByText("Button 2");
  const PaperChild3 = screen.getByText("It's got the Juice!");
  
  expect(PaperElement).toContainElement(PaperChild1);
  expect(PaperElement).toContainElement(PaperChild2);
  expect(PaperElement).toContainElement(PaperChild3);
});
