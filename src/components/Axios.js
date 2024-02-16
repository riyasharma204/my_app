import axios from 'axios';
import { Box } from "@mui/material";
import React, { useEffect,useState } from 'react';
import {Table} from '@mui/material';

function Axios() {
    const [data, setData] = useState();
    useEffect(()=> {
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then((response)=>{
        console.log(response)
        setData(response.data)
       })
    },[])
  return (
   
          <div>Axios Use
            
                <Box sx={{bgcolor: '#DEDEDE',width: "100%", flexDirection: 'column', mt:5}}>
                
                    <Table variant="soft" borderAxis="bothBetween"> 
                       <thead>
                        <tr>
                            <th >UserID</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                       </thead>
                       <tbody>
                       {data&&data.map((data)=>(
                        <tr key={data.id}>
                            <td>{data.userId}</td>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                        </tr>
                        ))}
                       </tbody>
                       </Table>
                   
                </Box>
        
    </div>
  )
}

export default Axios
