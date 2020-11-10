import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux';

import * as actions from '../01_actions/index'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ModalTracks(props) {
    console.log(props)
    return (
        <Dialog fullScreen open={props.modal.open} onClose={props.closeModal} TransitionComponent={Transition}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={props.closeModal} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        {props.playlist._playlist.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                <Divider />
                {props.playlist._playlist &&
                    props.playlist._playlist.tracks_playlist &&
                    props.playlist._playlist.tracks_playlist.map(item =>
                        <div key={item.track.id} >
                            <ListItem button key={item.track.id} >
                                <Grid container spacing={3} >
                                    <Grid item xs={12} lg={1} md={1} >
                                        <img className='img-playlist-modal' alt={item.track.album.name} src={item.track.album.images[0].url} />
                                    </Grid>
                                    <Grid item xs={9} lg={9} md={9} >
                                        <div >
                                            <ListItemText primary={item.track.name} secondary={item.track.album.name} />
                                        </div>

                                    </Grid>
                                    <Grid item xs={3} lg={2} md={2} >
                                        <div >
                                            {
                                                !item.play_track ?
                                                    <IconButton onClick={() => props.playTrack(item.track)} >
                                                        <PlayCircleFilledWhiteIcon className='icon-play-modal' />
                                                    </IconButton> :
                                                    <IconButton onClick={() => props.pauseTrack()} >
                                                        <PauseCircleFilledIcon className='icon-play-modal' />
                                                    </IconButton>
                                            }

                                        </div>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <Divider />
                        </div>
                    )
                }
            </List>
        </Dialog>
    );
}




function mapPropsToState(state) {
    return {
        modal: state.modal,
        playlist: state.playlist
    }
}

export default connect(mapPropsToState, actions)(ModalTracks);


