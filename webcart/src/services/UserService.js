import axios from 'axios';

export class UserService{
     baseUrl = "http://192.168.100.67:8080/users";
     getAll(){
         console.log("dentro del servicio")
         return (
             axios.get(this.baseUrl)
             .then(resultado => resultado )
             .then(resultado => console.log('Api: ',resultado.data) )
         )
           //const url = "http://192.168.100.67:8080/users"     
     //fetch(url)
     //.then(respuesta => respuesta.json())
     //.then(resultado => console.log(resultado))
     }
}
export default UserService;