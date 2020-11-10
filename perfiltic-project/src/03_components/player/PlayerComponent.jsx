import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../01_actions/index';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PauseIcon from '@material-ui/icons/Pause';

function playerComponent(props) {
    console.log(props, 'player')
    return (
        <Fragment>
            <Card style={{ display: 'flex' }}>
                <div>
                    <CardContent>
                        <Typography component="h5" variant="h5">
                            {props.playlist.track && props.playlist.track.name
                                ? props.playlist.track.name : 'Select Music'}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {props.playlist.track && props.playlist.track.artists
                                ? props.playlist.track.artists[0].name : ''}
                        </Typography>
                    </CardContent>
                    {
                        props.playlist.track ?
                            <div>
                                <IconButton aria-label="play/pause" onClick={() => props.pauseTrack()}>
                                    <PauseIcon />
                                </IconButton>
                            </div>
                            : ''
                    }

                </div>
                {props.playlist.track && props.playlist.track.album ?
                    <CardMedia
                        className='img-play'
                        image={props.playlist.track.album.images[0].url}

                    /> : ''}
            </Card>
        </Fragment>
    );
}

function mapPropsToState(state) {
    return {
        playlist: state.playlist,
    }
}

export default connect(mapPropsToState, actions)(playerComponent);