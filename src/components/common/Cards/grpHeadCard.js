import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ColorizeOutlinedIcon from '@material-ui/icons/ColorizeOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import PersonAddDisabledOutlinedIcon from '@material-ui/icons/PersonAddDisabledOutlined';
import VolumeMuteOutlinedIcon from '@material-ui/icons/VolumeMuteOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';


import Popover from '@material-ui/core/Popover';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #E8E8E8",
        borderRadius: 10
    },
    cardTtitle: {
        textAlign: "left",
        font: "normal normal 600 20px/30px Poppins",
        color: "#000000",
        opacity: 1,
    },
    cardSubText: {
        textAlign: "left",
        font: "normal normal normal 14px/30px Poppins",
        color: "#7D7D7D",
        opacity: 1
    },
    lastUpdate: {
        textAlign: "left",
        font: "normal normal normal 16px / 30px Poppins",
        color: "#7B7C7E",
        opacity: 1,
        paddingTop: 10
    }
}));

export default function GrpHeadCard(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <List dense className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                    />
                </ListItemAvatar>
                <ListItemText>
                    <Grid item xs={12}>
                        <Grid container justify="flex-start" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body2" className={classes.cardTtitle} component="p">
                                    {props.title}
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </ListItemText>
                <ListItemSecondaryAction>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            <Typography variant="body2" component="span" className={classes.lastUpdate}>
                                <PhoneOutlinedIcon color="inherit" fontSize="small" />
                                <VideoCallOutlinedIcon color="inherit" fontSize="small" />
                                <InfoIcon color="inherit" fontSize="small" />
                            </Typography>
                            <IconButton aria-label="settings" onClick={handleClick}>
                                <MoreVertIcon />
                            </IconButton>
                            <Typography variant="body2" component="span" className={classes.lastUpdate}>
                                <CloseIcon color="inherit" fontSize="small" style={{ paddingTop: "10%" }} />
                            </Typography>

                        </Grid>
                    </Grid>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <List component="nav"  >
                            {props.type === 'grpChat' ?
                                <>
                                    {!props.subType &&
                                        <ListItem button component={Link} to="/connect/messages/grpChatInfo">
                                            <ListItemIcon>
                                                <ColorizeOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Pin to Top" />
                                        </ListItem>
                                    }
                                    <ListItem button component={Link} to="/connect/messages/grpChatVoice">
                                        <ListItemIcon>
                                            <EditOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Rename" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/connect/messages/grpChatVideo">
                                        <ListItemIcon>
                                            <ExitToAppOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Leave" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/connect/messages/grpChatConnect">
                                        <ListItemIcon>
                                            <GroupAddOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Participant" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <PersonAddDisabledOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Remove Participant" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <VolumeMuteOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Mute Group" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <CameraAltOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Change Image" />
                                    </ListItem> </> :

                                <>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <ReportOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Report" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <BlockOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Block" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <VolumeMuteOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Mute Group" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <DeleteForeverOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Delete Chat" />
                                    </ListItem>
                                </>}
                        </List>
                    </Popover>

                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}