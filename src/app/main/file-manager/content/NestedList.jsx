import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';

const NestedList = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FolderIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Folder" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 4 }}>
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Front-End" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default NestedList;

