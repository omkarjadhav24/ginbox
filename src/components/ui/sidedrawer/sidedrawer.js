import React, { useState } from 'react';
import './sidedrawer.css'
import clsx from 'clsx';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import ListSubheader from '@material-ui/core/ListSubheader';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventIcon from '@material-ui/icons/Event';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import ForumIcon from '@material-ui/icons/Forum';
import Icon from '@material-ui/core/Icon';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PeopleIcon from '@material-ui/icons/People';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Inbox from '../../Inbox/inbox'
// connstant sidedrawer width
const drawerWidth = 240;
// for right side drawer
const rightdrawerWidth=56;
// styles for navbar and side drawer
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  // menuButton: {
  //   marginRight: 36,
  // },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  rightDrawer: {
    width: rightdrawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  rightDrawerOpen:{
    width: rightdrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  rightDrawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: '#f1f3f4',
    '&:hover': {
      backgroundColor: '#f1f3f4',
    },
    '&$focused': {
        backgroundColor: 'white',
      },
    // marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '86px',
      width: '729px',
      height:'46px'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    '&$focused': {
        backgroundColor: 'white',
      },
    marginTop:'7px',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  arrowDropDownIcon:{
      marginLeft:'440px'
  },
  removingBoxShadow:{
      boxShadow:'0px 0px 0.7px 0px'
  },
  inconSizeDecrease:{
      fontSize:'20px' 
     },
  coluringToTheInbox:{
      color:'#da3125',
      backgroundColor:'rgba(255, 0, 0, 0.2)',
      width:'200px',
      borderRadius:"0px 12px 12px 0px"
    },
    inboxIconRedColor:{
      color:'#da3125',
      paddingTop:'5px'

    },
    onHoverColor:{
        width:'200px',
        borderRadius:"0px 12px 12px 0px"
    },
    divBackgroundColor:{
      backgroundColor:'rgba(255, 0, 0, 0.2)',
      borderRadius:'50%'
    },
    heightOfUl:{
        height:'170px'
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    menuItemFromInbix:{
      paddingRight:'69px',
      paddingLeft:'69px'
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }
}));
const SideiDrawer=()=> {
    // consume all styles
  const classes = useStyles();
  // access the currently active theme. You can use it in your own components to have them respond to changes in the theme
  const theme = useTheme();
  // states
  const [open, setOpen] =useState(false);
  const [ropen, setROpen] =useState(false);
  const [more, setMore] =useState(false);
  const [categories, setCategories] =useState(false);
  const [anchorEl, setAnchorEl] =useState(null);
  // for toggling the side bar onClick
  const handleDrawerOpen = () => {
    let prevOpen=open
    setOpen(!prevOpen);
  };
  // for toggling the right side bar onClick
  const rightHandleDrawerOpen = () => {
    let prevROpen=ropen
    setROpen(!prevROpen);
  };
  // for showing more list in sidebar
  const showMoreList=()=>{
    let prevMore=more;
    setMore(!prevMore);
  }
  // show categories on click
  const categoriesHandler=()=>{
    let prevCateories=categories
    setCategories(true)
  }
  // on mouse hover show the side drawer
  const mouseOverDrawerOpen=()=>setOpen(true)
  // on mouse out close the side drawer
  const handleDrawerClose = () =>setOpen(false)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
      style={{color:'black',backgroundColor:'white'}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        },classes.removingBoxShadow)}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={()=>handleDrawerOpen()}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <img class="gb_uc" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x ,https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png 1x" alt="" aria-hidden="true" style={{ width:'109px',height:'40px'}}/>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search mail"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={
                { 'aria-label': 'search' }}
            />
            <IconButton className={classes.arrowDropDownIcon}>
          <Tooltip title="Show search options" placement="bottom">
              <ArrowDropDownIcon  />
          </Tooltip>
              </IconButton>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Tooltip title="Support" placement="bottom">
            <IconButton
              aria-haspopup="true"
              color="inherit"
            >
              <HelpOutlineIcon/> 
            </IconButton>
          </Tooltip>
          <Tooltip title="Settings" placement="bottom">
            <IconButton
              aria-haspopup="true"
              color="inherit"
            >
              <SettingsOutlinedIcon/> 
            </IconButton>
          </Tooltip>
          <Tooltip title="Google apps" placement="bottom">
            <IconButton
              aria-haspopup="true"
              color="inherit"
            >
              <AppsIcon/> 
            </IconButton>
          </Tooltip>
          <Tooltip title="Google Account" placement="bottom">
            <IconButton
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon /> 
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        onMouseOver={()=>mouseOverDrawerOpen()}
        onMouseOut={()=>handleDrawerClose()}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

       
        {open   ? 
              <div id="plusDivExpand"   style={{content:'',padding:'0px 0px 0px 13px',display:'flex',alignItems:'center',marginLeft:'7px',marginTop:'10px',marginBottom:'10px'}} >
              <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt=""/>
              <p style={{marginLeft:'20px', fontWeight:'bold'}}>Compose</p>
              </div>
              :
              <div id="plusDiv"   style={{content:'',padding:'0px 0px 0px 13px',display:'flex',alignItems:'center',marginLeft:'7px',marginTop:'10px',marginBottom:'10px'}} >
              <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt=""/>
              </div>
      }
            
        {/* <Divider /> */}
        <List  className={classes.heightOfUl} dense={true}>
        <Tooltip title="Inbox" placement="right-start">
            <ListItem button className={!open ?null:classes.coluringToTheInbox} >
              <ListItemIcon><div className={open ? null :classes.divBackgroundColor} >
              <InboxIcon className={classes.inconSizeDecrease} className={classes.inboxIconRedColor}/>
              </div></ListItemIcon>
              <ListItemText id="boldText" primary="Inbox" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Starred" placement="right-start">
            <ListItem button className={classes.onHoverColor}>
              <ListItemIcon><GradeRoundedIcon className={classes.inconSizeDecrease} /></ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem> 
        </Tooltip>
        <Tooltip title="Snoozed" placement="right-start">
            <ListItem button className={classes.onHoverColor}>
              <ListItemIcon><WatchLaterRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Snoozed" />
            </ListItem> 
        </Tooltip>
        <Tooltip title="Sent" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><SendIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItem>
        </Tooltip>
            {more ?
            <>
        <Tooltip title="Less" placement="right-start">
              <ListItem button onClick={()=>showMoreList()} className={classes.onHoverColor} >
              <ListItemIcon><ExpandLessRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Less" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Important" placement="right-start">
        <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><LabelImportantRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Important" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Chats" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><WhatsAppIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Chats" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Schedule" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><HourglassFullIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Schedule" />
            </ListItem>
        </Tooltip>
        <Tooltip title="All Mail" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><MailIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="All Mail" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Spam" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><ReportIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Trash" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><DeleteIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
        </Tooltip>
        <Tooltip title="Categories" placement="right-start">
            <ListItem button  onClick={()=>categoriesHandler()} className={classes.onHoverColor} >
              <ListItemIcon><LabelIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
        </Tooltip>
            {categories ? 
            <Collapse in={open} timeout="auto" unmountOnExit>
            <List dense={true} component="div" disablePadding>
            <Tooltip title="Social" placement="right-start">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Social" />
              </ListItem>
            </Tooltip>
            <Tooltip title="Updates" placement="right-start">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Updates" />
              </ListItem>
            </Tooltip>
            <Tooltip title="Forums" placement="right-start">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Forums" />
              </ListItem>
            </Tooltip>
            <Tooltip title="Promotions" placement="right-start">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary="Promotions" />
              </ListItem>
            </Tooltip>
            </List>
          </Collapse>  
          : null
          }
            <Tooltip title="Manage Labels" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><SettingsIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Manage Labels" />
            </ListItem>
            </Tooltip>
            <Tooltip title="Create Labels" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><AddIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Create Labels" />
            </ListItem>
            </Tooltip>
            </> 
            :
            <>
            <Tooltip title="More" placement="right-start">
             <ListItem button onClick={()=>showMoreList()} className={classes.onHoverColor} >
              <ListItemIcon><ExpandMoreRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="More" />
            </ListItem>
            </Tooltip>
            </>}
        </List>
        <Divider />
        <List  dense={true}
            // subheader={
            //   <ListSubheader component="div" id="nested-list-subheader">
            //     Meet
            //   </ListSubheader>
            // }
        >
          <Tooltip title="Meet" placement="right-start">
          {open ?  <p id="pMarginLeftMeet" >Meet</p> :

          <ListItem  >
          <ListItemIcon><VideocamOutlinedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
          </ListItem>
          }
          </Tooltip>
          <Tooltip title="New meetings" placement="right-start">
          <ListItem  style={{cursor:'pointer'}} >
          <ListItemIcon><VideocamIcon className={classes.inconSizeDecrease}/></ListItemIcon>
          <ListItemText primary="New meetings" />
          </ListItem>
          </Tooltip>
          <Tooltip title="My meetings" placement="right-start">
          <ListItem style={{cursor:'pointer'}}  >
          <ListItemIcon><EventIcon className={classes.inconSizeDecrease}/></ListItemIcon>
          <ListItemText primary="My meetings" />
          </ListItem>
          </Tooltip>
        </List>
        <Divider />
        <List>
        <ListItem button  >
            
            {open ?  <p id="pMarginLeft" >Hangouts</p> :
            <ListItemIcon><ForumIcon className={classes.inconSizeDecrease}/></ListItemIcon>
            }
            </ListItem>
          <ListItem button  >
          <ListItemIcon id="textMinWidth" ><AccountCircle color="primary" fontSize="large"  /></ListItemIcon>
          {open ? <> <ListItemText primary="Omkar" />  <ArrowDropDownIcon id="iconMarginRight" fontSize="small" /> 
          <Tooltip title="New Conversations" placement="right-start">
          <AddIcon  fontSize="small"/>
          </Tooltip>
           </> :null}
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main height="100%"  className={clsx({
          [classes.contentShift]: ropen,
        })}  >
        <div className={classes.toolbar} />
        <div  style={{backgroundColor:'white', width:open ? '1124px':ropen ? '1236px':'12890px',overflow:'hidden'}}  >
          <Inbox open={open} ropen={ropen} />
        </div>
       
        <div  id="shoeRightBar" onClick={()=>rightHandleDrawerOpen()}  style={{width:'50px',position:'absolute',bottom:'0px',right:'-24px'}}>
        <ArrowBackIosIcon style={{marginLeft:'9px',fontSize:"15px"}}/>
        </div>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={ropen}
        className={clsx(classes.rightDrawer, {
          [classes.rightDrawerOpen]: ropen,
          [classes.rightDrawerClose]: !ropen,
        })}
        classes={{
          paper: clsx({
            [classes.rightDrawerOpen]: ropen,
            [classes.rightDrawerClose]: !ropen,
          }),
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Tooltip title="Calender" placement="bottom">
        <div style={{cursor:'pointer'}}>
          <img style={{marginTop:"23px",marginLeft:'8px'}} width="20px" height="20px" src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt=""/>
        </div>
        </Tooltip>
        <Tooltip title="Keep" placement="bottom">
        <div style={{cursor:'pointer'}}>
          <img style={{marginTop:"31px",marginLeft:'8px'}} width="20px" height="20px" src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt=""/>
        </div>
        </Tooltip>
        <Tooltip title="Tasks" placement="bottom">
        <div style={{cursor:'pointer'}}>
          <img style={{marginTop:"31px",marginLeft:'8px'}} width="20px" height="20px" src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png" alt=""/>
        </div>
        </Tooltip>
        <Tooltip title="Contacts" placement="bottom">
        <div style={{cursor:'pointer'}} >
          <img style={{marginTop:"31px",marginLeft:'8px'}} width="20px" height="20px" src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png" alt=""/>
        </div>
        </Tooltip>
        <List >
        <Divider style={{marginTop:"26px"}} />
        <Tooltip title="Get Adds-ons" placement="left">
        <ListItem>
          <AddIcon className={classes.inconSizeDecrease} style={{marginTop:"25px",position:'relative',right:'9px'}}/>
        </ListItem>
        </Tooltip>
        <ListItem onClick={()=>rightHandleDrawerOpen()} style={{cusrsor:"pointer"}} >
        <Tooltip title="Hide Side Panel" placement="left">
        <ChevronRightIcon style={{marginTop:"250px",cursor:'pointer',position:'relative',right:'12px'}}/>
        </Tooltip>

        </ListItem>
        </List> 
        
      </Drawer>
      
    
    </div>
  );
}
export default SideiDrawer;