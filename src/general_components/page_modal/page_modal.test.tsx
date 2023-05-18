import {describe, test,expect} from 'vitest';
import {render} from '@testing-library/react';
import PageModal from './page_modal';


// checks if Page Modal component is mounted
describe('Page Modal', () => {
  test('should render the component', () => {
    const { getByTestId } = render(<PageModal />);
    const component = getByTestId('page-modal');
    
    expect(component).toBeInTheDocument();
  });
});

// checks if Progress bar component is mounted with right step number
describe('PageModal component', () => {
  it('should render progress bar with a step number', () => {

    const {getByTestId,getByText}= render(<PageModal />);

    const valueElement = getByText(2);
    const progressBar = getByTestId('progress-bar');

		// Retrieve the value from the element and convert it to a number
		const value = valueElement?.textContent
			? parseInt(valueElement.textContent)
			: null;

    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveTextContent(`Step ${value}`);

  });
});