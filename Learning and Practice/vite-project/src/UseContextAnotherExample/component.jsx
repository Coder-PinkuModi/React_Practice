// department_id
import { useState, useEffect } from 'react';

async function Component({id}){
    const [department_id, setDepartment_id] = useState(id);
    // useEffect(() => { 
        useEffect(() => {
            async function  getData(id){
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if(response.status == 200){
                const data = response.json()

            }
            setDepartment_id(id);    
            }
            getData(id)
        },[id]);
        return (
        <div>{id}</div>
    )
}

export default Component