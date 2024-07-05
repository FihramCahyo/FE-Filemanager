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
import {getFolder} from 'src/api';
import { fetchFolders, selectFolder } from '../store/folderslice';
import { useSelector, useDispatch } from 'react-redux';



const NestedList = () => {
  const [open, setOpen] = useState(false);
  const [Folder, setFolder] = useState([]);
  const dispatch = useDispatch();
  
  const status = useSelector((state) => state.folder.status);
  const error = useSelector((state) => state.folder.error);
  const folders = useSelector((state) => state.folder.data.data);
  console.log(status);
  console.log(folders);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFolders());
    }
  }, [status, dispatch]);

console.log(Folder);
  const handleClick = () => {
    setOpen(!open);
  };
let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <List
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {folders.map((folder) => (
          <div key={folder.id}>
            <ListItemButton onClick={() => handleClick(folder.id)}>
              <ListItemIcon>
                <FolderIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={folder.name} />
              {/* {selectedFolder?.id === folder.id && open ? <ExpandLess /> : <ExpandMore />} */}
            </ListItemButton>
            {folder.subfolders.map((sub) => (
              <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 4 }}>
                <ListItemButton>
                  <ListItemIcon>
                    <FolderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={sub.name} />
                </ListItemButton>
              </List>
            </Collapse>
            ))}
          </div>
        ))}
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

