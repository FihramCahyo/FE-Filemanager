import React from 'react';
import { Button, Divider, Grid, Toolbar, TextField, InputBase } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LoopIcon from '@mui/icons-material/Loop';
import IconButton from '@mui/material/IconButton';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import SearchIcon from '@mui/icons-material/Search';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';


const ToolBar = () => {
  const groupbuttons = [
    {
      label: 'Add File',
      icon: <AddCircleOutlineIcon />,
      variant: 'text',
      size: 'small',
    },
    {
      label: 'Add Folder',
      icon: <CreateNewFolderOutlinedIcon />,
      variant: 'text',
      size: 'small',
    },
    {
      label: 'Upload',
      icon: <UploadIcon />,
      variant: 'text',
      size: 'small',
    },
  ];

  const groupbuttons2 = [
    {
      label: 'Copy',
      icon: <ContentCopyIcon />,
      variant: 'text',
      size: 'small',
    },
    {
      label: 'Move',
      icon: <DriveFileMoveOutlinedIcon />,
      variant: 'text',
      size: 'small',
    },
    {
      label: 'Download',
      icon: <DownloadIcon />,
      variant: 'text',
      size: 'small',
    },
    {
      label: 'Rename',
      icon: <DriveFileRenameOutlineIcon />,
      variant: 'text',
      size: 'small',
    },
    {
      label: 'Delete',
      icon: <DeleteOutlineOutlinedIcon />,
      variant: 'text',
      size: 'small',
    },
  ];

  const groupbuttons3 = [
    {
      label: 'Archive',
      icon: <ArchiveOutlinedIcon />,
      variant: 'text',
      size: 'small',
    },
    {
      label: 'Permission',
      icon: <LockOutlinedIcon />,
      variant: 'text',
      size: 'small',
    },
    {
      label: 'All tools',
      icon: <MoreHorizOutlinedIcon />,
      variant: 'text',
      size: 'small',
    },
  ];


  const commonSX = {
    backgroundColor: '#fafafa',
    color: 'black',
    borderRadius: '4px',
    border: '1px solid',
    borderColor: '#eeeeee',
    minWidth: '30px',
    mx: 0.5
  };

  const buttonmain = [
    {
      label: 'Main',
      icon: <HomeOutlinedIcon fontSize="small" />,
      variant: 'contained',
      size: 'small',
      sx: {...commonSX},
    },  
  ];

  const groupicon = [
    { 
      icon: <ArrowBackIcon fontSize="small" />, 
      variant: 'contained', 
      size: 'small',
      sx: {...commonSX} 
    },
    { 
      icon: <ArrowForwardIcon fontSize="small" />, 
      variant: 'contained', 
      size: 'small',
      sx: {...commonSX} 
     },
    { 
      icon: <ArrowUpwardIcon fontSize="small" />, 
      variant: 'contained', 
      size: 'small',
      sx: {...commonSX} 
     },
     { 
       icon: <LoopIcon fontSize="small" />, 
       variant: 'contained', 
       size: 'small',
       sx: {...commonSX} 
      },
  ];

  const groupicon2 = [
    { 
      icon: <TocOutlinedIcon fontSize="small" />, 
      variant: 'contained', 
      size: 'small',
      sx: {...commonSX} 
     },
  ];

  return (
    <Grid container>
      <Grid item xs={12} bgcolor={'white'}>
          <Toolbar>
            {groupbuttons.map(({ label, icon, variant, size }) => (
              <Grid item key={label}>
                <Button startIcon={icon} variant={variant} size={size} sx={{ mx: 0.5 }}>
                  {label}
                </Button>
              </Grid>
            ))}
            <Divider orientation="vertical" flexItem sx={{ my: 2 }}/>
            {groupbuttons2.map(({ label, icon, variant, size}) => (
              <Grid item key={label}>
                <Button startIcon={icon} variant={variant} size={size} sx={{ mx: 0.5 }}>
                  {label}
                </Button>
              </Grid>
            ))}
            <Divider orientation="vertical" flexItem sx={{ my: 2 }}/>
            {groupbuttons3.map(({ label, icon, variant, size}) => (
              <Grid item key={label}>
                <Button startIcon={icon} variant={variant} size={size} sx={{ mx: 0.5 }}>
                  {label}
                </Button>
              </Grid>
            ))}
            
          </Toolbar>
      </Grid>
      
      <Grid item xs={12} bgcolor={'white'}>
      <Divider />
      <Toolbar>
        {buttonmain.map(({ label, icon, variant, size, sx }) => (
          <Grid item key={label}>
            <Button startIcon={icon} variant={variant} size={size} sx={sx}>
              {label}
            </Button>
          </Grid>
        ))}
        {groupicon.map(({ icon, variant, sx, size }) => (
          <Grid item key={icon.props.name}>
            <Button variant={variant} size={size} sx={sx} disableRipple>
              {icon}
            </Button>
          </Grid>
          ))}
        <Grid item xs={12} display="flex" alignItems="center" sx={{ ml: 1, mr: 1 }}>
        <TextField
          variant="outlined"
          size="small"
          value="Path://public_html/files/Web assets/"
          InputProps={{
            startAdornment: (
              <FolderOpenOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
            ),
            endAdornment: (
              <IconButton
                sx={{
                  height: '100%',
                  padding: '6px',
                  backgroundColor: '#fafafa',
                  borderRadius: '0 4px 4px 0',
                  border: '1px solid #ccc',
                  borderLeft: 'none',
                  marginLeft: 0,
                  marginRight: -1,
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            ),
          }}
          sx={{
            flexGrow: 1,
            '& .MuiOutlinedInput-root': {
              height: '40px', // Set the height of the TextField
              borderRadius: '4px',
              padding: '0 8px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ccc',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ccc',
              },
            },
          }}
        />
        </Grid>
        <Grid xs={4} sx={{ ml: 1, mr: 1 }}>
          <InputBase
            startAdornment={<SearchIcon />}
            placeholder="Search"
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '0 8px',
            }}
          />
        </Grid>
        <Grid>
        {groupicon2.map(({ icon, variant, sx, size }) => (
          <Grid item key={icon.props.name}>
            <Button variant={variant} size={size} sx={sx} disableRipple>
              {icon}
            </Button>
          </Grid>
        ))}
        </Grid>
      </Toolbar>
      </Grid>
    </Grid>
  );
};

export default ToolBar;


