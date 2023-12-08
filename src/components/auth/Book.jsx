import './UserCSS.css'

function User(props){
    return(
    <div className = "card">
        <img src={props.user.photo} />
        <h1>{props.user.username}</h1>
        <h3>Address</h3>
        <h4>{props.user.phone}</h4>
        <h4>{props.user.email}</h4>
        <ul>
            <li>Street: {props.user.address.street}</li>
            <li>Number: {props.user.address.number}</li>
            <li>City: {props.user.address.city}</li>
            <li>Zipcode: {props.user.address.zipcode}</li>
            <li>Latitude: {props.user.address.geolocation.lat}</li>
            <li>Longtuide: {props.user.address.geolocation.long}</li>
        </ul>
    </div>
    );}

export default User;
