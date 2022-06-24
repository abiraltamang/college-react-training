import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Course from './components/Course';
import Address from './components/Address';
import Student from './components/Student'
import Phase from './components/Phase'
import List from './components/List'
import Friends from './components/Friends'
import Number from './components/Number'
import Country from './components/Country'
import Library from './components/Library'
import Youtube from './components/Youtube'
import Params from './components/Params'
import Ucf from './components/Ucf'
import UsestrictMode from './components/UsestrictMode';
import Cf1 from './components/Cf1';
import Parent from './components/aboutcontext/Parent'

// reactDom.render(<First />, document.getElementById("first"));
// reactDom.render(<College name="NCIT" />, document.getElementById("first"));
// reactDom.render(data, document.getElementById("first"));
// reactDom.render(<Student/>, document.getElementById("stu"));
// reactDom.render(<Course name={name1} price = {price} />, document.getElementById("course"));
// reactDom.render(<Address province="Bagmati" tole ="Koteshwor" />, document.getElementById("address"));
// ReactDOM.unsmountComponentAtNode(document.getElementById("phase"));
// ReactDOM.render(<Phase/>, document.getElementById("phase"));

// ReactDOM.render(<List/>, document.getElementById("list"));
// ReactDOM.render(<Friends/>, document.getElementById("friend"));
// ReactDOM.render(<Fruits />, document.getElementById("fruit"));
// ReactDOM.render(<Number />, document.getElementById("number"));
// ReactDOM.render(<Country />, document.getElementById("number"));
// ReactDOM.render(<Library />, document.getElementById("library"));
// ReactDOM.render(<Youtube />, document.getElementById("library"));
// ReactDOM.render(<Params />, document.getElementById("root"));
// ReactDOM.render(<Ucf />, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Cf1/>);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent/>);



// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
 