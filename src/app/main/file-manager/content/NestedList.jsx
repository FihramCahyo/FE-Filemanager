import React, { useState, useEffect } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {getFolder} from 'src/api';
import { fetchFolders, selectFolder } from '../store/folderslice';
import { useSelector, useDispatch } from 'react-redux';



const NestedList = () => {
  
  const [openFolders, setOpenFolders] = useState({});
  const [Folder, setFolder] = useState([]);
  const dispatch = useDispatch();
  
  const status = useSelector((state) => state.folder.status);
  const error = useSelector((state) => state.folder.error);
  const folders = useSelector((state) => state.folder.data.data);
  const select = useSelector((state) => state.folder);
  console.log(status);
  console.log(folders);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFolders());
    }
  }, [status, dispatch]);

console.log(Folder);
const handleClick = (item) => {
  console.log(item);
    setOpenFolders((prevOpenFolders) => ({
      ...prevOpenFolders,
      [item.id]: !prevOpenFolders[item.id],
    }));
  dispatch(selectFolder({ item }));
};

const file = (item)=>{
  return item.map((file) => (
    <ListItemButton key={file.id}>
      <ListItemIcon>
        <InsertDriveFileIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={file.file_name} />
    </ListItemButton>
  ));
}
const coba =(item)=>{
  return item.map((folder) => (
    <div key={folder.id}>
    <ListItemButton onClick={() => handleClick(folder)}>
      <ListItemIcon>
        <FolderIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={folder.name} />
      {openFolders[folder.id] ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={openFolders[folder.id]} timeout="auto" unmountOnExit>
          {openFolders[folder.id] && folder.subfolders && (
            <List component="div" disablePadding sx={{ pl: 4 }}>
              {file(folder.files)}
              {coba(folder.subfolders)}
            </List>
          )}
          {console.log(select)}
    </Collapse>
  </div>
  ));
};
console.log(coba); 
let content ;
  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
     
      <List
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {coba(folders)}
      </List>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Folders</h2>
      {content}
    </section>
  );

};

export default NestedList;

