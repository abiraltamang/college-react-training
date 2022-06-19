import React, {Component} from 'react';
class List extends Component{
    render(){
        const list=[10,20,30,40,50];
        let display=list.map(n=> <li> {n}</li>)
        return(
            <div>
              {display}
    
            </div>
        )
    }
}
export default List;