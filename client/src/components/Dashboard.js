import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {

    const [users, setUsers] = useState({})

    useEffect(() => {

        async function getData() {
            const response = await axios.get('/users/list')

            console.log("getData - response", response)
        }

        getData();
    }, [])

    return ( 
        <div>


        </div>
     );
}

export default Dashboard;