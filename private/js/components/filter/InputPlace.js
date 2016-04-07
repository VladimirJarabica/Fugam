import React, { Component } from 'react'

import reqwest from 'reqwest'

class InputPlace extends Component {
  constructor() {
    super()
    this.state = {
      whispers: [],
      searchValue: '',
      value: ''
    }
  }

  handleChange() {
    let displayValue = this.refs.inputPlace.value
    this.props.setValue(this.props.name, displayValue, this.state.searchValue)
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.value !== nextProps.value) {
      this.setState({
        value: nextProps.value
      })

      if(nextProps.value !== '')
        this.loadWhispers(nextProps.value)
      else
        this.unloadWhispers()
    }
  }

  loadWhispers(term) {
    let self = this
    let query = `https://api.skypicker.com/places?term=${term}&v=2&local`
    reqwest(query, (resp) => {
      self.setState({
        whispers: resp
      })
    })
  }

  unloadWhispers() {
    this.setState({
      whispers: []
    })
  }

  setWhisper(displayValue, searchValue) {
    this.setState({
      searchValue,
      value: displayValue
    },
    () => {
      this.props.setValue(this.props.name, displayValue, this.state.searchValue)
      this.unloadWhispers()
    })
  }

  render() {
    return (
      <div className="col col-xs-12">
      	<input ref="inputPlace" onChange={this.handleChange.bind(this, this.state.searchValue)} value={this.state.value} type="text" name={this.props.name} placeholder={this.props.placeholder} autoComplete='off' />
        {
          (() => {
            if(this.state.whispers.length > 0)
              return (
                <ul className="search_whisperer">
                {            
                  this.state.whispers.map((whisper) => {
                    return <li className='whisper' onClick={this.setWhisper.bind(this, whisper.value, whisper.id)}>{whisper.value}</li>
                  })
                }
              </ul>
              )
          })()
        }
      </div>
    )
  }

}


export default InputPlace
