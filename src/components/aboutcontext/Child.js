import React, {Component} from "react";
import {Consumer} from './Context';
import Grandchild from "./Grandchild";


class Child extends Component{
    render(){
        return(
            <div>
                <h3>This is child commponent</h3>
                <Grandchild/>
            </div>
        )
    }
}
export default Child;