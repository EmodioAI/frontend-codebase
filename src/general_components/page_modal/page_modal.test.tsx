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
