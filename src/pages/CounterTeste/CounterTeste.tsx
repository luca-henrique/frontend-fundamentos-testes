import { useState } from 'react'

const TestElements = () => {
  const [counter, setCounter] = useState<number>(0)

  setTimeout(() => {
    setCounter(counter + 1)
  }, 500)

  return (
    <>
      <h6 data-testid="counter">{counter}</h6>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}>
        up
      </button>
      <button
        disabled={counter === 0}
        data-testid="button-down"
        onClick={() => setCounter(counter - 1)}
      >
        down
      </button>
    </>
  )
}

export default TestElements
