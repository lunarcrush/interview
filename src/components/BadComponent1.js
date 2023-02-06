import React from 'react'
import BadComponent3 from './BadComponent3'

export default function BadComponent1({ url }) {
  const [status, setStatus] = React.useState(false)
  const [data, setData] = React.useState({})

  const getData = async () => {
    setStatus(true)
    const res = await fetch(url).then((res) => res.json())
    setData(res)
    setStatus(false)
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <BadComponent3
      status={status}
      text={`LunarCrush coin of the day is ${data.name} (${data.symbol})`}
    />
  )
}
