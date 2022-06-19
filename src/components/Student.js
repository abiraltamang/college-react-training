import React, {Component} from "react";
import Course from './Course';
import Address from './Address';
import '../App.css'

class Student extends Component{
    constructor(){
        super();
    }
    render(){
        var name = "ReactJs";
        var price = 50000;
        var province = "Bagmati";
        var tole = "Kathmandu";
        return(
            <div className="App">
                <h2>Student Details</h2>
                <Course name={name} price={price}/>
                <Address province={province} tole={tole}/>
            </div>
        )
    }
}


// function Student (){

//     var name="React Js training";
//     var price = 200000;


//     return(
//         <div>
//             <h2>Student  Details</h2>
//             <Course name={name} price={price}/>
//             <Address province="Bagmati" tole="Koteshwor"/>
//         </div>
//     )
// }

export default Student;