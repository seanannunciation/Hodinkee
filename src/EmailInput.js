import React from 'react';
import ReactDOM from 'react-dom';
import './EmailInput.css';

class EmailInput extends React.Component {

    constructor(props) {
      super(props);
      this.state = { value: 'Your Email Address'};

      this.inputChange = this.inputChange.bind(this);
      this.submitForm =  this.submitForm.bind(this);
    }

    inputChange(event) {
      this.setState({ value: event.target.value});
    }

    submitForm(event) {
      alert('Thank you for your interest');
      event.preventDefault();
    }


    render() {
      return (
        <div className="input">
          <form onSubmit={this.submitForm}>
            <input className="inputtext" type="text" name="email" value={this.state.value} onChange={this.inputChange}/>
            <button className="notify" type="submit">NOTIFY ME</button>
         </form>
        </div>
      );
    }

};

export default EmailInput;
