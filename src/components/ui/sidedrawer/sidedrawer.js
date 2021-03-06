import React, { useState } from 'react';
import './sidedrawer.css'
import clsx from 'clsx';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
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
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PeopleIcon from '@material-ui/icons/People';
import Collapse from '@material-ui/core/Collapse';
import InfoIcon from '@material-ui/icons/Info';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Tooltip from '@material-ui/core/Tooltip';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DescriptionIcon from '@material-ui/icons/Description';
import Inbox from '../../Inbox/inbox'
import Starred from '../../Starred/starred'
import NavBar from '../navbar/navbar'
import Snoozed from '../../Snoozed/snoozed'
import Sent from '../../Sent/sent'
import Draft from '../../Draft/draft'
import Important from '../../Important/important'
import Schedule from '../../Schedule/scheduled'
import Chat from '../../Chats/chats'
import AllMail from '../../AllMail/allmail'
import Trash from '../../Trash/trash'
import Details from '../../Deatils/Details'
import {NavLink,Route, Switch} from 'react-router-dom'
// connstant sidedrawer width
const drawerWidth = 240;
// for right side drawer
const rightdrawerWidth=56;
// styles for  and side drawer
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // menuButton: {
  //   marginRight: 36,
  // },
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
  inconSizeDecrease:{
      fontSize:'20px' 
     },
  coluringToTheInbox:{
      color:'#da3125',
      backgroundColor:'rgba(255, 0, 0, 0.2)!important',
      width:'200px',
      borderRadius:"0px 12px 12px 0px"
    },
    // inboxIconRedColor:{
    //   color:'#da3125',
    //   paddingTop:'5px'

    // },
    onHoverColor:{
        width:'200px',
        borderRadius:"0px 12px 12px 0px"
    },
    heightOfUl:{
        height:'200px'
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    inboxDivColor:{
      backgroundColor: "rgba(255, 0, 0, 0.2) !important",
      width: "200px",
      borderRadius: "0px 12px 12px 0px",
      color: "#da3125"
    }
    // divBackgroundColor:{
    //   backgroundColor:'rgba(255, 0, 0, 0.2)',
    //   borderRadius:'50%'
    // }
}));
const SideiDrawer=()=> {
    // consume all styles
  const classes = useStyles();
  // access the currently active theme. You can use it in your own components to have them respond to changes in the theme
  const theme = useTheme();
  // states
  const [open, setOpen] =useState(false);
  const [sideMenuClick,setSideMenuClick]=useState(false)
  const [inboxColor,setInboxColor]=useState(true);
  const [ropen, setROpen] =useState(false);
  const [more, setMore] =useState(false);
  const [categories, setCategories] =useState(false);
  const [anchorEl, setAnchorEl] =useState(null);
  const [searchMessage, SetSearchMessage] =useState(null);

  // for toggling the side bar onClick
  const handleDrawerOpen = () => {
    let prevOpen=open
    setOpen(!prevOpen);
    setSideMenuClick(false);
  };
  // onclick side drawer menu drawer remains open
  const handleDrawerOpenOnSideDrawerMenuClick = () => {
    setOpen(true);
    setSideMenuClick(true);
    setInboxColor(false)
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
      <NavBar sMessage={searchMessage} open={open} ropen={ropen} navbar={()=>handleDrawerOpen()} />
      <Drawer
        variant="permanent"
        onMouseOver={()=>{ return sideMenuClick ? null: mouseOverDrawerOpen()}}
        onMouseOut={()=>{return sideMenuClick ? null : handleDrawerClose()}}
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
        <NavLink onClick={()=>{handleDrawerOpenOnSideDrawerMenuClick();setInboxColor(true)}} exact={true} activeClassName={classes.is_active} to="/inbox">
        <Tooltip  title="Inbox" placement="right-start">
            <ListItem button id={inboxColor ? "fw":null} className="inbox" className={inboxColor ?  classes.inboxDivColor : classes.onHoverColor} >
             <ListItemIcon><div className={open ? null :classes.divBackgroundColor} >
              <InboxIcon style={{paddingTop:'5px'}} className={classes.inconSizeDecrease} className="inboxIconColor"/>
              </div></ListItemIcon>
              <ListItemText id="boldText" primary="Inbox" />
            </ListItem>
        </Tooltip>
        </NavLink>
        <NavLink onClick={()=>{handleDrawerOpenOnSideDrawerMenuClick();}} to="/starred">
        <Tooltip title="Starred" placement="right-start">
            <ListItem button className={classes.onHoverColor}>
              <ListItemIcon><GradeRoundedIcon className={classes.inconSizeDecrease} /></ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem> 
        </Tooltip>
        </NavLink>
        <NavLink onClick={()=>{handleDrawerOpenOnSideDrawerMenuClick();}} to="/snoozed">
        <Tooltip title="Snoozed" placement="right-start">
            <ListItem button className={classes.onHoverColor}>
              <ListItemIcon><WatchLaterRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Snoozed" />
            </ListItem> 
        </Tooltip>
        </NavLink>
        <NavLink onClick={()=>{handleDrawerOpenOnSideDrawerMenuClick();}}  to="/sent">
        <Tooltip title="Sent" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><SendIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItem>
        </Tooltip>
        </NavLink>
        <NavLink onClick={()=>{handleDrawerOpenOnSideDrawerMenuClick();}} to="/draft">
        <Tooltip title="Draft" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><DescriptionIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Draft" />
            </ListItem>
        </Tooltip>
        </NavLink>
            {more ?
            <>
        <Tooltip title="Less" placement="right-start">
              <ListItem button onClick={()=>showMoreList()} className={classes.onHoverColor} >
              <ListItemIcon><ExpandLessRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Less" />
            </ListItem>
        </Tooltip>
        <NavLink onClick={()=>{SetSearchMessage("is:important");handleDrawerOpenOnSideDrawerMenuClick();}} to="/imp">
        <Tooltip title="Important" placement="right-start">
        <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><LabelImportantRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Important" />
            </ListItem>
        </Tooltip>
        </NavLink>
        <NavLink onClick={()=>{SetSearchMessage("in:chats");handleDrawerOpenOnSideDrawerMenuClick();}} to="/chats">
        <Tooltip title="Chats" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><WhatsAppIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Chats" />
            </ListItem>
        </Tooltip>
        </NavLink>
        <NavLink onClick={()=>{SetSearchMessage("in:schedule");handleDrawerOpenOnSideDrawerMenuClick();}} to="/schedule">
        <Tooltip title="Schedule" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><HourglassFullIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Schedule" />
            </ListItem>
        </Tooltip>
        </NavLink>
        <NavLink to="/allmail">
        <Tooltip title="All Mail" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><MailIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="All Mail" />
            </ListItem>
        </Tooltip>
        </NavLink>
        <NavLink onClick={()=>{SetSearchMessage("in:spam");handleDrawerOpenOnSideDrawerMenuClick();}} to="/spam">
        <Tooltip title="Spam" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><ReportIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItem>
        </Tooltip>
        </NavLink>
        <NavLink onClick={()=>{SetSearchMessage("in:trash");handleDrawerOpenOnSideDrawerMenuClick();}} to="/trash">
        <Tooltip title="Trash" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><DeleteIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
        </Tooltip>
        </NavLink>
        <NavLink to="/categories">
        <Tooltip title="Categories" placement="right-start">
            <ListItem button  onClick={()=>categoriesHandler()} className={classes.onHoverColor} >
              <ListItemIcon><LabelIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
        </Tooltip>
        </NavLink>
            {categories ? 
            <Collapse in={open} timeout="auto" unmountOnExit>
            <List dense={true} component="div" disablePadding>
        <NavLink onClick={()=>handleDrawerOpenOnSideDrawerMenuClick()} to="/social">
            <Tooltip title="Social" placement="right-start">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Social" />
              </ListItem>
            </Tooltip>
          </NavLink>
        <NavLink onClick={()=>handleDrawerOpenOnSideDrawerMenuClick()} to="/updates">
            <Tooltip title="Updates" placement="right-start">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Updates" />
              </ListItem>
            </Tooltip>
        </NavLink>
        <NavLink onClick={()=>handleDrawerOpenOnSideDrawerMenuClick()} to="/forums">
            <Tooltip title="Forums" placement="right-start">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Forums" />
              </ListItem>
            </Tooltip>
        </NavLink>
        <NavLink onClick={()=>handleDrawerOpenOnSideDrawerMenuClick()} to="/promotions">
            <Tooltip title="Promotions" placement="right-start">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary="Promotions" />
              </ListItem>
            </Tooltip>
        </NavLink>
            </List>
          </Collapse>  
          : null
          }
        <NavLink onClick={()=>handleDrawerOpenOnSideDrawerMenuClick()} to="/managelabels">
            <Tooltip title="Manage Labels" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><SettingsIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Manage Labels" />
            </ListItem>
            </Tooltip>
          </NavLink>
        <NavLink onClick={()=>handleDrawerOpenOnSideDrawerMenuClick()} to="/createlabels">
            <Tooltip title="Create Labels" placement="right-start">
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><AddIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Create Labels" />
            </ListItem>
            </Tooltip>
        </NavLink>
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
        <NavLink to="/meet">
          <Tooltip title="Meet" placement="right-start">
          {open ?  <p id="pMarginLeftMeet" >Meet</p> :

          <ListItem  >
          <ListItemIcon><VideocamOutlinedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
          </ListItem>
          }
          </Tooltip>
        </NavLink>
        <NavLink onClick={()=>handleDrawerOpenOnSideDrawerMenuClick()} to="/newmeetings">
          <Tooltip title="New meetings" placement="right-start">
          <ListItem  style={{cursor:'pointer'}} >
          <ListItemIcon><VideocamIcon className={classes.inconSizeDecrease}/></ListItemIcon>
          <ListItemText primary="New meetings" />
          </ListItem>
          </Tooltip>
        </NavLink>
        <NavLink onClick={()=>handleDrawerOpenOnSideDrawerMenuClick()} to="/mymeetings">
          <Tooltip title="My meetings" placement="right-start">
          <ListItem style={{cursor:'pointer'}}  >
          <ListItemIcon><EventIcon className={classes.inconSizeDecrease}/></ListItemIcon>
          <ListItemText primary="My meetings" />
          </ListItem>
          </Tooltip>
        </NavLink>
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
        <Divider/>
      </Drawer>
      <main  style={{height:'700px'}}  className={clsx({
          [classes.contentShift]: ropen,
        })}  >
        <div className={classes.toolbar} />
        <div style={{height:'700px',backgroundColor:'white', width:open ? '1124px':ropen ? '1236px':'12890px',overflow:'hidden'}}  >
          <Switch>
                <Route path="/" component={Inbox} exact />
                <Route path="/inbox" component={Inbox} exact />
                <Route path="/starred" component={Starred} exact />
                <Route path="/snoozed" component={Snoozed} exact />
                <Route path="/sent" component={Sent} exact />
                <Route path="/draft" component={Draft} exact />
                <Route path="/imp" component={Important} exact />
                <Route path="/schedule" component={Schedule} exact />
                <Route path="/chats" component={Chat} exact />
                <Route path="/allmail" component={AllMail} exact />
                <Route path="/trash" component={Trash} exact />
                {/* <Route path="/inbox/details" component={Details} exact /> */}
                <Route path="/inbox" render={({ match: { url } }) => (
                <>
                <Route path={`${url}/`} component={Inbox} exact />
                <Route path={`${url}/details`} component={Details} />
                </>)}/>
          </Switch>
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