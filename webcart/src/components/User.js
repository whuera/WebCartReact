import React from 'react'

const User = (props) =>{
   // const {firstName, lastName,email} = props.User
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card text-white bg-danger">
                <img src={props.imageUrl} alt="users-images" className="card-img-top" />               
                <div className="card-body">
                <h5 className="card-title">Nombres: {props.firstName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Apellidos: {props.lastName}</h6>
                <p class="card-text">Correo: {props.email}</p>
                <p class="card-text">Edad: {props.userBasicData.age}</p>
                </div>
            </div>
        </div>
    );
}
export default User;