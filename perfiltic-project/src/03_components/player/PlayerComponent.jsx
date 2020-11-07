import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../01_actions/index';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

function playerComponent(props) {
    return (
        <Fragment>
            <Card >
                <div >
                    <CardContent >
                        <Typography component="h5" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller
                        </Typography>
                    </CardContent>
                    <div>
                        <IconButton aria-label="previous">
                            {true ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon />
                        </IconButton>
                        <IconButton aria-label="next">
                            {true ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </div>
                </div>
                <CardMedia
                    image=""
                    title="Live from space album cover"
                />
            </Card>
        </Fragment>
    );
}

function mapPropsToState(state) {
    return {
        user: state.user,
    }
}

export default connect(mapPropsToState, actions)(playerComponent);