import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import WalletsService from './services/walletsService'
import Wallet from './pages/wallet'
import './App.css'

const wallets = [
  { id: 1, type: 'bitcoin' },
  { id: 2, type: 'bitcoin' },
  { id: 3, type: 'etherum' }
]

function App () {
  const dispatch = useDispatch()
  const amount = useSelector(state => {
    let amountSum = 0
    Object.values(state.walletsById).forEach(wallet => {
      amountSum += Number(wallet.balance)
    })
    return amountSum
  })
  return (
    <div className='App'>
      <WalletsService />
      <Router>
        <div>
          <header>All wallets amount: {amount}</header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Wallets</Link>
              </li>
              {wallets.map(({ id, type }) => (
                <li key={id}>
                  <Link to={`/wallets/${type}/${id}`}>
                    # {id} {type}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() =>
              dispatch({
                type: 'ADD_MONEY',
                payload: {
                  id: 1
                }
              })
            }
          >
            Increment wallet
          </button>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/' exact>
              <Wallets />
            </Route>
            <Route path='/wallets/:type/:id'>
              <Wallet />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

function Wallets () {
  return <h2>Wallets</h2>
}

export default App
