import React from 'react'
import { connect } from 'react-redux'

class WalletsService extends React.Component {
  timerId = 0

  startInterval = () => {
    const { dispatch } = this.props

    clearInterval(this.timerId)
    this.timerId = setInterval(() => {
      dispatch({
        type: 'ADD_MONEY',
        payload: {
          id: 1
        }
      })
    }, 1000)
  }

  componentDidMount () {
    this.startInterval()
  }

  componentWillUnmount () {
    clearInterval(this.timerId)
  }

  //   componentDidUpdate (props) {
  //     if (this.props.time !== props.time) {
  //       this.startInterval()
  //     }
  //   }

  render () {
    return <div></div>
  }
}

export default connect()(WalletsService)
