import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const columns: GridColDef[] = [
    { 
      field: 'userId', 
      type: 'number',
      headerName: 'User ID', 
      sortable: true,
      width: 70, 
    },
    {
      field: 'id',
      type: 'number',
      headerName: 'Post ID',
      sortable: true,
      width: 70,
    },
    {
      field: 'title',
      type: 'string',
      headerName: 'Post Title',
      sortable: false,
      editable: true,
      width: 475,
    },
    {
      field: 'body',
      type: 'string',
      headerName: 'Post Body',
      editable: true,
      sortable: false,
      width: 675,
    }
  ];
  
const SecondPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
      const localUserData = JSON.parse(localStorage.getItem('userDataKey')||'{}');
      if(!Object.keys(localUserData).length){
        navigate('/')
      }
      else{
        const fetchData = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/posts');
            setPosts(result.data);
        };
        fetchData();
      }
    }, [navigate])

    return(
        <div>
            <h1>JSON details fetched from an API</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Box sx={{ height: 630, width: '85%' }}>
                    <DataGrid
                        rows={posts}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                    />
                </Box>
            </div>
        </div>
    )
}
export default SecondPage;