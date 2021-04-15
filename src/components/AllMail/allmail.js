import React,{useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import MessageIcon from '@material-ui/icons/Message';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core';
// styles
const useStyles = makeStyles((theme) => ({
    arrowDropDownIcon:{
        marginLeft:'440px'
    },
      menuItemFromInbix:{
        paddingRight:'69px',
        paddingLeft:'69px'
      },
      inboxListHover:{
        '&:hover': {
          borderBottom:'2px solid #bbc1bb5e',
          borderRight:'0.4px solid #bbc1bb5e',
          borderLeft:'0.2px solid #bbc1bb5e',
          borderTop:'0.6px solid #bbc1bb5e',
          cursor:'pointer'
       }
      },
      paginationSpan:{
        '&:hover': {
        backgroundColor:'#f5f7f7',
        border:'1px solid #f5f7f7',
        borderRadius:"2px"
       }
      },
  
  }));
const AllMail=(props)=>{
     // consume all styles
  const classes = useStyles();
  // access the currently active theme. You can use it in your own components to have them respond to changes in the theme
  const theme = useTheme();
  // states
    const [anchorEl, setAnchorEl] =useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =useState(null);
    const [mouseOver,setMouseOver]=useState(false)
    const isMenuOpen = Boolean(anchorEl);
// handling droparrow
const handleProfileMenuOpen = (event) =>setAnchorEl(event.currentTarget)
// for pagination op up
// const openPopUpOnMover=(event)=>{
//   setAnchorEl(event.currentTarget)
//   setMouseOver(true)
// }
// for closing the droparrow options
const handleMobileMenuClose = () =>setMobileMoreAnchorEl(null);
// for onclick close
const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
};
const menuId = 'primary-search-account-menu';
const renderMenu = (
  <Menu
    anchorEl={anchorEl}
    style={{top:"35px",left:'70px'}}
    id={menuId}
    id="menuItemList"
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem className={classes.menuItemFromInbix}  onClick={handleMenuClose}>All</MenuItem>
    <MenuItem className={classes.menuItemFromInbix} onClick={handleMenuClose}>None</MenuItem>
    <MenuItem className={classes.menuItemFromInbix} onClick={handleMenuClose}>Read</MenuItem>
    <MenuItem className={classes.menuItemFromInbix} onClick={handleMenuClose}>UnRead</MenuItem>
    <MenuItem className={classes.menuItemFromInbix} onClick={handleMenuClose}>Starred</MenuItem>
    <MenuItem className={classes.menuItemFromInbix} onClick={handleMenuClose}>UnStarred</MenuItem>
  </Menu>
);
// const paginationPopUp = 'primary-search-account-menu';
// const renderPaginationPopUp = (
//   <Menu
//     anchorEl={anchorEl}
//     style={{top:"35px",left:'70px'}}
//     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//     open={isMenuOpen}
//     onClose={handleMenuClose}
//   >
//     <MenuItem className={classes.menuItemFromInbix}  onClick={handleMenuClose}>Newest</MenuItem>
//     <MenuItem className={classes.menuItemFromInbix} onClick={handleMenuClose}>Oldest</MenuItem>
//   </Menu>
// );
    return(
        <>
        <List style={{width:'100%'}} >
              <ListItem id="inboxFirstRow" >
              <Tooltip title="Select" placement="bottom">
              <>
              <Checkbox 
              name="checkedB"
              color="disabled"
              />
              <ArrowDropDownIcon   id="dropArrowCheck" onClick={(event)=>handleProfileMenuOpen(event)} />
              </>
              </Tooltip>
              {/* {mouseOver ? renderPaginationPopUp :renderMenu} */}
              {renderMenu}
              {/* {renderPaginationPopUp} */}
                <Tooltip title="Refresh" placement="bottom">
                <IconButton >
                <RefreshIcon fontSize="small"  style={{cursor:'pointer',position:'relative'}} />  
                </IconButton>
                </Tooltip>
                <Tooltip  title="More" placement="bottom">
                <IconButton  >
                <MoreVertIcon  fontSize="small"/>
                </IconButton >
                </Tooltip>
                <span  className={classes.paginationSpan} style={{padding:'4px',display:'block',cursor:'pointer',position:'relative',left:props.open ? '810px':props.ropen ? '940px':'980px'}}  >1 of 1 </span>
                <Tooltip dense  title="Older" placement="bottom">
                <ChevronRightIcon style={{position:'relative',left:props.open ? '891px' :props.ropen ? '1003px':'1050px'}} fontSize="small"/>
                </Tooltip>
                <Tooltip dense  title="Newer" placement="bottom">
                <ChevronLeftIcon style={{position:'relative',left:props.open ? '820px' :props.ropen ? '950px':'985px'}} fontSize="small"/>
                </Tooltip>
              </ListItem>
              <ListItem className={classes.inboxListHover}  id="inboxList" style={{backgroundColor:'#f5f7f7'}}>
                <>
              <Tooltip title="Select" placement="bottom">
              <Checkbox 
              name="checkedB"
              color="disabled"
              />
              </Tooltip>
              <Tooltip title="Unstarred" placement="bottom">
              <StarBorderOutlinedIcon color="disabled" />
              </Tooltip>
              <span style={{position:'relative',left:'5px',fontSize:'.875rem',top:'2px',letterSpacing:'.2px'}} >Om,Ajay</span>
              <span style={{position:'relative',left:'147px',width:'800px',fontSize:'.875rem',top:'2px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'"..."'}} >Training:Ok</span>
              <MessageIcon style={{position:'relative',left:props.open ? '145px':props.ropen ?   '258px':'240px',top:'2px'}}/>
              <div  style={{position:'relative',left:props.open ? '145px':props.ropen ?   '258px':'260px',fontSize:'.875rem',top:'2px'}} >
                <span>
                 10.42 AM
                </span>
              </div>
              </>
              </ListItem>
              <Divider/>
              <ListItem className={classes.inboxListHover} style={{backgroundColor:'#f5f7f7'}}>
                <>
              <Tooltip title="Select" placement="bottom">
              <Checkbox 
              name="checkedB"
              color="disabled"
              />
              </Tooltip>
              <Tooltip title="Unstarred" placement="bottom">
              <StarBorderOutlinedIcon color="disabled"  />
              </Tooltip>
              <span style={{position:'relative',left:'5px',fontSize:'.875rem',top:'2px',letterSpacing:'.2px'}} >Om,Ajay</span>
              <span style={{position:'relative',left:'147px',width:'800px',fontSize:'.875rem',top:'2px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'"..."'}} >Training:Ok</span>
              <MessageIcon style={{position:'relative',left:props.open ? '145px':props.ropen ?   '258px':'240px',top:'2px'}}/>
              <div  style={{position:'relative',left:props.open ? '145px':props.ropen ?   '258px':'277px',fontSize:'.875rem',top:'2px'}} >
                <span>
                  14 Apr
                </span>
              </div>
              </>
              </ListItem>
              <Divider/>
               <ListItem className={classes.inboxListHover} style={{backgroundColor:'#f5f7f7'}}>
                <>
              <Tooltip title="Select" placement="bottom">
              <Checkbox 
              name="checkedB"
              color="disabled"
              />
              </Tooltip>
              <Tooltip title="Unstarred" placement="bottom">
              <StarBorderOutlinedIcon color="disabled" />
              </Tooltip>
              <span style={{position:'relative',left:'5px',fontSize:'.875rem',top:'2px',letterSpacing:'.2px'}} >Om,Ajay</span>
              <span style={{position:'relative',left:'147px',width:'800px',fontSize:'.875rem',top:'2px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'"..."'}} >Training:Ok</span>
              <MessageIcon style={{position:'relative',left:props.open ? '145px':props.ropen ?   '258px':'240px',top:'2px'}}/>
              <div  style={{position:'relative',left:props.open ? '145px':props.ropen ?   '258px':'277px',fontSize:'.875rem',top:'2px'}} >
                <span>
                  14 Apr
                </span>
              </div>
              </>
              <Divider/>
              </ListItem>
            </List>
        </>
    );
}
export default AllMail;