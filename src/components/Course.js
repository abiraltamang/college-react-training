import { Component, Fragment } from "react";

class Course extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
         
            <Fragment>
                <h4>Course</h4>
                <i>Name = {this.props.name}</i><br/>
                <i>Price = {this.props.price}</i><br/>
            </Fragment>
        )
    }
}

export default Course;