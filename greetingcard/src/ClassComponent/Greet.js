import React from 'react';

class Greet extends React.Component{

    handleClick = () => {
        
        alert(this.props.reply);

    };

     render (){
    return (
        
        <div>
        <h1>Good morning {this.props.name}</h1>
        <button onClick={this.handleClick}>Click to reply</button>
        </div>
    )
    }
}

export default Greet
