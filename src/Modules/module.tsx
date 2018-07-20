import * as React from "react";

interface HelloProp{
    name : String;
}

class Hello extends React.Component<HelloProp, {}>{
    render(){
        return <div>Hello, {this.props.name}</div>;
    }
}

export default Hello;
