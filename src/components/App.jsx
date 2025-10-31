import Button from "./Button.jsx"
import Count from "./Count.jsx"
import { useState } from "react"

export default function App() {

  const [value, setValue] = useState(0)

  return (
    <>
      <Count value={value} />
      <Button
        text='Decrement'
        value={value}
        change={setValue}
      />
      <Button
        text='Reset'
        value={value}
        change={setValue}
      />
      <Button
        text='Increment'
        value={value}
        change={setValue}
      />
    </>
  )
}
