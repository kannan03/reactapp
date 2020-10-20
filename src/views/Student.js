import React from 'react';
import ReactDOM from 'react-dom';

class Student extends React.Component {

    constructor(props) {
        super(props);
         this.handleClick = this.handleClickEvent.bind(this);
        this.state = {
            username : null
        }
      }
      async handleClickEvent(e) {
        //   var uuu = await document.getElementById("username").value;
        //   await this.setValue({
        //       username : uuu
        //   });

        //   alert(e.target.name);
      }

     async  handleClicks(event) {
        var uuu = await document.getElementById("username").value;
        //  this.state.setValue({
        //     username : uuu
        // });
        alert(uuu);
      }

      render() {
        return (
            <div>
                <input type="text" id ="username" /> <br/> <br />
                <button name="user" onClick={this.handleClicks}> Clickbutton</button>
                <h1> Class component Apps {this.state.username}</h1>
            </div>
        );
      }
}

export default Student;
