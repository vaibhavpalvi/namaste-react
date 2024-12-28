import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "dummy"
    }
  }

  componentDidMount(){
    console.log("Component did mount called");
  }

  render() {
    const { name } = this.props;
    return (
      <div className="user-card">
        <p>Name : {name}</p>
        <p>Dummy : {this.state.name}</p>
      </div>
    );
  }
}
