import { render, fireEvent } from '@testing-library/react'

import { Home } from './Home'

/* 

A biblioteca react-router-dom em si retorna muitas coisas, mas o que me interessa que é utilizado na página é o hook useHistory então só preciso mockar a implementação dele.

*/
const mockedHistoryPush = jest.fn()
jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  }
})

describe('Home', () => {
  it('should go to List page', () => {
    const { getByPlaceholderText, getByText } = render(<Home />)
    // implementation

    fireEvent.change(getByPlaceholderText('User'), {
      target: { value: 'azagatti' },
    })
    fireEvent.click(getByText('Ver repos'))

    expect(getByPlaceholderText('User')).toHaveDisplayValue('azagatti')
    expect(mockedHistoryPush).toBeCalled()
  })
})
