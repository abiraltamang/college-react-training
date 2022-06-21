import React, {Component, StrictMode} from 'react';
import Ucf from './Ucf';

export class usestrictMode extends Component {
  render() {
    return (
        <React.StrictMode>
            <Ucf/>      
        </React.StrictMode>
    )
  }
}

export default usestrictMode;