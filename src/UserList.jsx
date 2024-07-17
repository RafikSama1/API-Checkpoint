import { useEffect, useState } from "react"
import axios from "axios";

export default function UserList(){
    
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios
         .get('https://jsonplaceholder.typicode.com/users')
         .then((response) => setUsers(response.data))
         .then(console.log(users));
        }, []);

    return(
        <>
            <div>
                <ul>
                    {users.map((user) => {
                        return(
                            <li key={user.id}>{user}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}