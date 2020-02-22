import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

export default function Wallet () {
  let {
    params: { type, id }
  } = useRouteMatch()
  const balance = useSelector(state => state.walletsById[id].balance)

  return (
    <>
      <h2>
        # {id} {type}
      </h2>
      <div>{balance}</div>
    </>
  )
}
