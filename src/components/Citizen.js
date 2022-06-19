import react,{Component} from 'react';

class Citizen extends Component{
    constructor(props){
        super(props);
        this.state = {
            citizenId : "234234234",
            ctzName : "Abiral Tamang",
            address : "Koteshwor, Kathmandu"
        }

    }
    render(){
        return (
            <div>
                <h2>This is citizen details</h2>
                <p>Name : {this.state.ctzName}</p>
                <p>Address : {this.state.address}</p>
                <p>Country Name : {this.props.countryName}</p>
            </div>
            
        )
    }
}

export default Citizen;