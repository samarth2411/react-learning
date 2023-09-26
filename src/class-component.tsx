import React from "react"
import { PropsDemo } from "./props-demo";
class ClassComponentDemo extends React.Component {

    // state -: helps to store data in components also this is not a state this is just an object for state we have to define generic
    state = { name: "Nitya", age: "21" };

    render() {
        return <div>
            <div>
                <h1 className="background">This is a class Component {this.state.name} {this.state.age}</h1>
            </div>
            <div>
                <PropsDemo sam = {"Parent To Child"} nitya = {this.state}/>  {/* props -: variables that we can pass from parent component to child component */}
            </div>
        </div>
    }
}

export default ClassComponentDemo