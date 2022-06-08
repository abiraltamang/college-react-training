import React,{Component} from "react";
import ListNumber from "./ListNumber";

class Number extends Component{
    constructor(props){
        super(props)
    }
    render(){
        var numberList = [10,20,30,40,50,60,70,80,100];
        
        return(
            <div><h2>Number list</h2>{

                numberList.map(f=> <ListNumber number={f}/>)
            }
            </div>
        )
    }
}
export default Number;
