// STATES:
// -state is used to change the existing data.
// -it is used to achieve the dynamic behaviour
// -states are always used with the class components
// -

export class Country extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Nepal";
            state:"7";
            PM:"shere";
            
        }
    }
    <div> 
        cname:{this state }
    </div>
  render() {
    return (
      <div>Country</div>
    )
  }
}

export default Country;