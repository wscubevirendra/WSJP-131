function Card({name="Anonymous", email="No email provided", age="Unknown"}) {
  
    return(
        //Create User Card with Name Email and age
        <div style={
            {
                backgroundColor: age < 30 ? "lightgreen" : "lightcoral",
            }
        } className="card">
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h5>Age: {age}</h5>
        </div>
    )
}


export default Card;