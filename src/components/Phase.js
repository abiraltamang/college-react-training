import React,{Component} from 'react';

class Phase extends Component {
    constructor(props){
        super(props);
        console.log("1. Ar First constructor runs ");
    }
    static getDerivedStateFromProps(){
        console.log("2. At second it runs");

    }
    componentDidMount(){   
        console.log("4. componentDIdMount () runs");
    }   

    componentDidUpdate(){
        console.log("5. componentDidUpdate(), runs after change in state. ")
    }
    componentWillUnmount(){
   
        console.log("It will run at last.")
    }
    render(){

        console.log("3. At third it runs");
        return(
            <div></div>
        )
    }
}

export default Phase;