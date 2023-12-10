import React from 'react';


class Form extends React.Component {

  // Function to handle form submission
  handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // You can perform any actions related to form submission here
    // For example, you can access the form data using event.target.elements
    const name = event.target.elements.name.value;
    const mobileNumber = event.target.elements.mobileNumber.value;
    const address = event.target.elements.address.value;

    // You can now do something with the form data, such as sending it to a server
    console.log('Form submitted with data:', { name, mobileNumber, address });
  }

  render() {
    return (
      <>
    <div class='mainContainer'>
        <form className='formSubmit' onSubmit={this.handleSubmit}>
            <div><label>Enter your name: </label>
          <input type='text' name='name' /></div>
          
          <div> <label>Enter your mobile number: </label>
          <input type='text' name='mobileNumber' /></div>
         
          <div> <label>Enter your address: </label>
          <input type='text' name='address' /></div>
         
          <button type='submit' id='submitbutton'>Submit</button>
          
        </form>
        </div>
      </>
    );
  }
}

export default Form;
