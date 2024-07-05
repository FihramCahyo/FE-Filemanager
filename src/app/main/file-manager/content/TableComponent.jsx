import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import { selectFolders, selectFolder } from '../store/folderslice';
import { useSelector, useDispatch } from 'react-redux';

const TableComponent = ({ rows }) => {
  const dispatch = useDispatch();
  // const id = useSelector((state) => state.folder.selectedFolder);
  const folders = useSelector((state) => state.folder.selectedFolder.item);

  console.log(folders);

  // useEffect(() => {
  //   if (folders == null) {
  //     console.log('ok');
  //   }
  // },[folders]);


  const list =(folder)=>{
    if (!folder) {
      return (
        <TableRow>
          <TableCell colSpan={4}>
            <div className='flex justify-center items-center h-32'>
              Please select a folder to see its content.
            </div>
          </TableCell>
        </TableRow>
      );
    }
  
    if (folder.subfolders.length === 0 && folder.files.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={4}>
            <div className='flex justify-center items-center h-32'>
             Folder kosong.
            </div>
          </TableCell>
        </TableRow>
      );
    }
    return (
      <>
        {listfolder(folder.subfolders)}
        {listfile(folder.files)}
      </>
    );
  }
  const listfile = (item)=>{
    return item.map((file) => (
      <TableRow key={file.id}>
        <TableCell component="th" scope="row">
        <InsertDriveFileIcon />
          {file.file_name}</TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
    ))
  }
  const listfolder = (item)=>{
    return item.map((folder) => (
      <TableRow key={folder.id}>
        <TableCell component="th" scope="row">
        <FolderIcon />
        {folder.name}</TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
    ))
  }
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="customized table" size='small'>
        <TableHead className='bg-slate-200'>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Last Modified</TableCell>
            <TableCell align="right">Permission</TableCell>
            <TableCell align="right">Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='bg-white'>
         {list(folders)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;


