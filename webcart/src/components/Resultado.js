import React, { Component } from "react";
import User from "./User";

class Resultado extends Component {
    getUsers = () =>{
        const users = this.props.users;
        if(users.length === 0) return null;
        console.log('usuarios: ',users);
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {users.map(user => (
                        <User
                        key={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email.value}
                        userBasicData={user.userBasicData}
                        imageUrl={user.imageUrl.value}
                        />
                    ) ) }
                </div>
            </React.Fragment>    
        )
    }

  render() {
    return (
        <React.Fragment>
            {this.getUsers() }
        </React.Fragment>
    )
  }
}
export default Resultado;
