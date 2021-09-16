import axios from 'axios';

export class UserService{
     baseUrl = "http://18.216.140.87:8080/api/products";
     getAll(){
         console.log("dentro del servicio")
         return (
             axios.get(this.baseUrl)
             .then(resultado => resultado )
             .then(resultado => console.log('Api: ',resultado.data) )
         )
     }
}
export default UserService;