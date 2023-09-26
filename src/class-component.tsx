import React from "react"
class ClassComponentDemo extends React.Component{

    state = {name:"Nitya", age:"21"};

    render() {
        return <h1 className="background">This is a class Component {this.state.name} {this.state.age}</h1>
    }
}

export default ClassComponentDemo