import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EditText extends Component {

  state = {
    value: "some text",
    isInEditMode: false
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
  }

  updateComponentValue = () => {
    this.setState( {
      isInEditMode: false,
      value: this.refs.theTextInput.value
    })
  }

  renderEditView = () => {
    return (
      <div>
          <input type="text"
            defaultValue={this.state.value}
            ref='theTextInput'
          />    
          <button onClick={this.changeEditMode}>✕</button>
          <button onClick={this.changeEditMode}>✓</button>
      </div>
    )
  }

  renderDefaultView = () => {
    return (
      <div onDoubleClick={this.changeEditMode}>
        {this.state.value}
      </div>
    )
  }

}

export default EditText;