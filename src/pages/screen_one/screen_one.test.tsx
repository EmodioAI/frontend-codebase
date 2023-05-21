import {describe, test,expect} from 'vitest';
import {render, fireEvent} from '@testing-library/react';
import ScreenOne from './screen_one';

// checks if Page Modal component is mounted
describe('Screen One ', () => {
  test('should render the component', () => {
    const { getByTestId ,getByText} = render(<ScreenOne changeButton={()=>{}}/>);
    const component = getByTestId('screen-one');
    const text = getByText('Click on a button of your choice to proceed')
    const checkboxOne = getByText('Type Text')
    const checkboxTwo = getByText('Upload File')

    expect(checkboxOne).toBeInTheDocument();
    expect(checkboxTwo).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(component).toBeInTheDocument();
  });
});

//checks if only one checkbox can be selected at a time
describe('Screen One ', () => {
    it('should render the component', () => {
        const { container} = render(<ScreenOne changeButton={()=>{}}/>);
        const checkboxOne = container.querySelector('#checkbox_one')
        const checkboxTwo = container.querySelector('#checkbox_two')
    

        if(!checkboxOne || !checkboxTwo){
            throw new Error('Checkbox not found')
        }

        fireEvent.click(checkboxOne)
        fireEvent.click(checkboxTwo)
    
        expect(checkboxOne).not.toBeChecked();
        expect(checkboxTwo).toBeChecked();
    });
});