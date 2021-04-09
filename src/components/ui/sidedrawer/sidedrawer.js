import React from 'react';
import './sidedrawer.css'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
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
// connstant sidedrawer width
const drawerWidth = 240;
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
  menuButton: {
    marginRight: 36,
  },
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
        height:'257px'
    }
}));

export default function MiniDrawer() {
    // consume all styles
  const classes = useStyles();
  // access the currently active theme. You can use it in your own components to have them respond to changes in the theme
  const theme = useTheme();
  // states
  const [open, setOpen] = React.useState(false);
  const [more, setMore] = React.useState(false);

  
  // for toggling the side bar onClick
  const handleDrawerOpen = () => {
    let prevOpen=open
    setOpen(!prevOpen);
  };
  // for showing more list in sidebar
  const showMoreList=()=>{
    let prevMore=more;
    setMore(!prevMore);
  }
  // on mouse hove show the side drawer
//   const mouseOverDrawerOpen=()=>{
//     setOpen(true)
//   }
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
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
            <IconButton className={classes.arrowDropDownIcon}><ArrowDropDownIcon  /></IconButton>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="google apps"
              aria-haspopup="true"
              color="inherit"
            >
              <HelpOutlineIcon/> 
            </IconButton>
            <IconButton
              aria-label="google apps"
              aria-haspopup="true"
              color="inherit"
            >
              <SettingsOutlinedIcon/> 
            </IconButton>
            <IconButton
              aria-label="google apps"
              aria-haspopup="true"
              color="inherit"
            >
              <AppsIcon/> 
            </IconButton>
            <IconButton
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
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
        // onMouseOver={()=>mouseOverDrawerOpen()}
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
        {/* <Divider /> */}
        <List  className={classes.heightOfUl} dense={true}>
            <ListItem button className={!open ?null:classes.coluringToTheInbox} >
              <ListItemIcon><div className={open ? null :classes.divBackgroundColor} >
              <InboxIcon className={classes.inconSizeDecrease} className={classes.inboxIconRedColor}/>
              </div></ListItemIcon>
              <ListItemText id="boldText" primary="Inbox" />
            </ListItem>
            <ListItem button className={classes.onHoverColor}>
              <ListItemIcon><GradeRoundedIcon className={classes.inconSizeDecrease} /></ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem> 
            <ListItem button className={classes.onHoverColor}>
              <ListItemIcon><WatchLaterRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Snoozed" />
            </ListItem> 
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><SendIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItem>
            {more ?
            <>
              <ListItem button onClick={()=>showMoreList()} className={classes.onHoverColor} >
              <ListItemIcon><ExpandLessRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Less" />
            </ListItem>
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><LabelImportantRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Important" />
            </ListItem>
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><WhatsAppIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Chats" />
            </ListItem>
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><HourglassFullIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Schedule" />
            </ListItem>
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><MailIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="All Mail" />
            </ListItem>
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><ReportIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItem>
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><DeleteIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button className={classes.onHoverColor} >
              <ListItemIcon><LabelIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
            </> 
            :
            <>
             <ListItem button onClick={()=>showMoreList()} className={classes.onHoverColor} >
              <ListItemIcon><ExpandMoreRoundedIcon className={classes.inconSizeDecrease}/></ListItemIcon>
              <ListItemText primary="More" />
            </ListItem>
            </>}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
      </main>
    </div>
  );
}
