import * as React from 'react'

export const TsxDemo = () => {
  // use explicit types for testing purposes
  const [hasChanged, setHasChanged]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = React.useState(false)

  // change after 10 seconds
  React.useEffect(() => {
    setTimeout(() => {
      setHasChanged(true)
    }, 10000)
  }, [hasChanged, setHasChanged])

  return <div>{`${!hasChanged ? 'Hello' : 'Goodbye'} from TSX!`}</div>
}
