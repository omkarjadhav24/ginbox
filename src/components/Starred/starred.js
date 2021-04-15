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
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
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
      firstDiv:{
        width: '220px',
        height: '6px',
        backgroundColor: '#dadce0',
        position: 'relative',
        top: '298px',
        left: '21px',
        cursor:'pointer',
        borderRadius:"4px 4px 4px 4px"

      },
     firstDivSpan :{
        position: 'relative',
        top: '300px',
        left: '21px',
        cursor:'pointer'

      },
     firstDivIcon :{
        position:'relative',
        top:'4px'
     },
     secondtDiv:{
        position: 'relative',
        top: '265px',
        left: '590px',
        cursor:'pointer'
      },
      thirdDiv:{
        position: 'relative',
        top: '225px',
        left: '1065px'
      }

  
  }));
const Starred=(props)=>{
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
                {/* <span  className={classes.paginationSpan} style={{padding:'4px',display:'block',cursor:'pointer',position:'relative',left:props.open ? '810px':props.ropen ? '940px':'980px'}}  >1 of 1 </span>
                <Tooltip dense  title="Older" placement="bottom">
                <ChevronRightIcon style={{position:'relative',left:props.open ? '891px' :props.ropen ? '1003px':'1050px'}} fontSize="small"/>
                </Tooltip>
                <Tooltip dense  title="Newer" placement="bottom">
                <ChevronLeftIcon style={{position:'relative',left:props.open ? '820px' :props.ropen ? '950px':'985px'}} fontSize="small"/>
                </Tooltip> */}
              </ListItem>
              <Divider/>
              <ListItem   id="inboxList" style={{backgroundColor:'white'}}>
                <>
              {/* <Tooltip title="Select" placement="bottom">
              <Checkbox 
              name="checkedB"
              color="disabled"
              />
              </Tooltip>
              <Tooltip title="Unstarred" placement="bottom">
              <StarBorderOutlinedIcon color="disabled" />
              </Tooltip> */}
              <span style={{ paddingBottom:'10px',paddingTop:'10px',paddingLeft:'8px',paddingRight:'8px', position:'relative',fontSize:'.875rem',top:'2px'}} >No starred messages. Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation.</span>
              {/* <span style={{position:'relative',left:'147px',width:'800px',fontSize:'.875rem',top:'2px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'"..."'}} >[GitHub] Please Verify Your Email Address</span> */}
              {/* <div  style={{position:'relative',left:props.open ? '145px':props.ropen ?   '258px':'315px',fontSize:'.875rem',top:'2px'}} > */}
                {/* <span>
                  14 Apr
                </span>
              </div> */}
              </>
              </ListItem>
              <Divider/>
            </List>
                  <div className={classes.firstDiv}  >
                  </div>
                  <span className={classes.firstDivSpan} >0.06 GB of 30 GB  <OpenInNewIcon className={classes.firstDivIcon} fontSize="small"/></span>
                  <div className={classes.secondtDiv}>
                      <span style={{position:'relative',left:'8px',cursor:'pointer'}} >Program Policies</span><br/>
                      <span>Powered by Google</span>
                  </div>
                  <div className={classes.thirdDiv}>
                      <span  >Last account activity: 3 hours ago</span><br/>
                      <span style={{position:'relative',left:'173px',cursor:'pointer'}}>Details</span>
                  </div>
        </>
    );
}
export default Starred;