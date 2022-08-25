import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  waitFor,
} from '@testing-library/react'
import TestElements from './CounterTeste'

afterEach(cleanup)
it('should equal to 0', () => {
  const { getByTestId } = render(<TestElements />)
  expect(getByTestId('counter')).toHaveTextContent('0')
})

it('should be enabled', () => {
  const { getByTestId } = render(<TestElements />)
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
})
it('should be disabled', () => {
  const { getByTestId } = render(<TestElements />)

  expect(getByTestId('button-down')).toBeDisabled()
})

it('increments counter', () => {
  const { getByTestId } = render(<TestElements />)
  fireEvent.click(getByTestId('button-up'))
  expect(getByTestId('counter')).toHaveTextContent('1')
})

it('decrements counter', () => {
  const { getByTestId } = render(<TestElements />)

  fireEvent.click(getByTestId('button-up'))

  fireEvent.click(getByTestId('button-down'))

  expect(getByTestId('counter')).toHaveTextContent('0')
})

it('increments counter after 0.5s', async () => {
  const { getByTestId, getByText } = render(<TestElements />)
  fireEvent.click(getByTestId('button-up'))
  await waitFor(() => {
    expect(getByText('1')).toBeInTheDocument()
  })
})
