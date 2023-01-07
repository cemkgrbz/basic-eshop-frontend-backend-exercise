import axios from "axios";
import React, { useEffect, useContext } from "react";
import {MdDeleteForever} from 'react-icons/md'
import {Link} from 'react-router-dom';
import {FiEdit} from 'react-icons/fi';
import { AppContext } from "./Context";



function Dashboard() {

    const {state, dispatchState} = useContext(AppContext)

    // const [users, setUsers] = useState([])

    useEffect(() => {

        async function getData() {
            const response = await axios.get('/users/list')

            console.log("getData - response", response)

            dispatchState({
                type: 'loadUsers',
                payload: response.data.users
            })
            // setUsers(response.data.users)
        }

        getData();
    }, [])
    

    const handleDelete = async (id) => {
        console.log("id -", id)

        const response = await axios.delete('/users/delete/' + id)

        console.log("response -", response)

        if (response.data.success) {

            dispatchState({
                type: 'removeUser',
                payload: id
            })

        } else {
            if (response.data.errorId === 1 ) {
                alert('User not found')
            }
        }

    }

    return (
        
        <div className='flex justify-center w-full flex-col gap-[20px]'>  
        {/* <Header />  */}
        <div className="ml-5 mt-3 font-bold">User List</div>         
        {
                state.users.map(item => <div 
                key={item._id}
                className='flex gap-[20px] items-center ml-5'
                >username: {item.username} 
                <span></span>
                email: {item.email} <MdDeleteForever className='hover:text-red-500 hover:cursor-pointer'
                onClick={() => handleDelete(item._id)}
                />
                <Link to={'/dashboard/users/edit/' + item._id}>
                    <FiEdit 
                        className='hover:text-red-500 hover:cursor-pointer'
                    />
                </Link>
                </div>)
            }

        </div>
     );
}

export default Dashboard;
