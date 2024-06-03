import * as React from 'react'

export const JsxDemo = () => {
  const [hasChanged, setHasChanged] = React.useState(false)

  // change after 10 seconds
  React.useEffect(() => {
    setTimeout(() => {
      setHasChanged(true)
    }, 10000)
  }, [hasChanged, setHasChanged])

  return <div>{`${!hasChanged ? 'Hello' : 'Goodbye'} from JSX!`}</div>
}
