import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';

export default function AxiosGrid() {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false); // Add this line

  const handleButtonClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const updatedRows = response.data.map((row, index) => ({
            id: index + 1,  
            ...row,
          }));
        setRows(updatedRows);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
    const updatedRows = rows.map(row => {
      if (row.id === selectedRow.id) {
        return {
          ...row,
          body: selectedRow.body,
        };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleChange = (e) => {
    setSelectedRow({
      ...selectedRow,
      body: e.target.value,
    });
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'userId', headerName: 'UserId', width: 150, editable: true },
    { field: 'title', headerName: 'Title', width: 200, editable: true },
    { field: 'body', headerName: 'Body', width: 200, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleButtonClick(params.row)}
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%',mt:8}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box mt={2}>
           <TextField
              label="ID"
              fullWidth
              value={selectedRow ? selectedRow.id : ''}
              disabled
            />
          </Box>
          <Box mt={2}>
           <TextField
              label="User ID"
              fullWidth
              value={selectedRow ? selectedRow.userId : ''}
              disabled
           />
          </Box>
          <Box mt={2}>
           <TextField
              label="Title"
              fullWidth
              value={selectedRow ? selectedRow.title : ''}
              disabled
          />
          </Box>
          <Box mt={2}> 
          <TextField
            label="Body"
            fullWidth
            multiline
            value={selectedRow ? selectedRow.body : ''}
            onChange={handleChange}
          />
          </Box>
          <Button onClick={handleClose}>Save</Button>
        </Box>
      </Modal>
    </Box>
  );
}