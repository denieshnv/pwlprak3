import './style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { FormProvider } from 'react-advanced-form'
import rules from './validation-rules'
import messages from './validation-messages'
import RegistrationForm from './RegistrationForm'


class App extends React.Component {
  state = {
    serialized: null
  }

  handleSubmitStart = ({ serialized }) => {
    this.setState({ serialized })
    alert('All is well! You have been registered')
  }

  render() {
    return (
      <div className="container">
        <div className="Bg">
          <FormProvider rules={rules} messages={messages}>
            <div className="header">
              <h2>Registration</h2>
            </div>
            <div className="flex">
              <RegistrationForm onSubmitStart={this.handleSubmitStart} />
            </div>
          </FormProvider>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
