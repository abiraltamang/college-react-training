function College(props){
    var regNo = 24234;
    var pername = "Abiral Tamange"
    var name = "Kathford International College";
    var address = "Balkumari, Lalitpur"
    var course = "Bsc CSIT"
    return (
        <div className="App">
            <h3>Registration number = {regNo}</h3>
            <h3>My name is =  {pername}</h3>
            <h3>College name = {props.name}</h3>
            <h3>Address = {address}</h3>
            <h3>Course= {course}</h3>
        </div>
    )
}
export default College;