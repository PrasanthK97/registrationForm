// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    inputFN: '',
    inputLN: '',
    FN: '',
    LN: '',
    isEmptyFN: false,
    isEmptyLN: false,
    isSubmitted: false,
  }

  onClickForm = event => {
    const {inputFN, inputLN} = this.state
    event.preventDefault()

    if (inputFN === '') {
      this.setState({isEmptyFN: true})
    }
    if (inputLN === '') {
      this.setState({isEmptyLN: true})
    }
    if (inputFN !== '' && inputLN !== '') {
      this.setState({
        isEmptyFN: false,
        isEmptyLN: false,
        isSubmitted: true,
        inputFN: '',
        inputLN: '',
      })
    }

    this.setState({
      FN: inputFN,
      LN: inputLN,
    })
  }

  onChangeFirstName = event => {
    this.setState({inputFN: event.target.value})
    console.log(event.target.value)
  }

  onChangeLastName = event => {
    this.setState({inputLN: event.target.value})
  }

  onBlurFN = event => {
    const {inputFN} = this.state
    if (inputFN === '') {
      this.setState({isEmptyFN: true})
    } else {
      this.setState({isEmptyFN: false})
    }
    console.log('blur', event.target.value)
  }

  onBlurLN = event => {
    const {inputLN} = this.state
    if (inputLN === '') {
      this.setState({isEmptyLN: true})
    } else {
      this.setState({isEmptyLN: false})
    }
    console.log('blur', event.target.value)
  }

  formElement = () => {
    const {isEmptyFN, isEmptyLN} = this.state
    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={this.onClickForm}>
          <label htmlFor="firstName">FIRST NAME</label>
          <br />
          <input
            onBlur={this.onBlurFN}
            onChange={this.onChangeFirstName}
            id="firstName"
          />
          {isEmptyFN ? <p>Required</p> : null}
          <br />
          <label htmlFor="lastName">LAST NAME</label>
          <br />
          <input
            onBlur={this.onBlurLN}
            onChange={this.onChangeLastName}
            id="lastName"
          />
          <br />
          {isEmptyLN ? <p>Required</p> : null}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  onClickRefresh = () => {
    this.setState({isSubmitted: false})
  }

  afterSubmit = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.onClickRefresh}>
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="bg-main">
        {isSubmitted ? this.afterSubmit() : this.formElement()}
      </div>
    )
  }
}

export default RegistrationForm
