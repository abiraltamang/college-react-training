import { Component, Fragment } from "react";

// class Address extends Component {
//     constructor(props){
//         super(props);

//     }

//     render(){
//         return(
         
//             <Fragment>
//                 <h4>Address</h4>
//                 <i> Province = {this.props.province}</i><br/>
//                 <i>Tole  = {this.props.tole}</i><br/>
//             </Fragment>
//         )
//     }
// }

const Address=()=>{
    return(
        <Fragment>
            <h4>Address</h4>
            <i> Province = {this.props.province}</i><br/>
            <i>Tole  = {this.props.tole}</i><br/>
        </Fragment>

    )
}

export default Address;

