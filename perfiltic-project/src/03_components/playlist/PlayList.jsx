import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../01_actions/index';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function PlayList(props) {
    console.log(props, 'playlist')
    useEffect(() => {
        props.getPlaylist(props.user.data.id);
    },[]);
    
    return (
        <Fragment>
            <Card>
                <CardContent>
        
                    <Typography variant="h5" component="h2">
                        {props.user.data.display_name}
        </Typography>

                    <Typography variant="body2" component="p">
                    {props.user.data.email}
                    </Typography>
                    <Typography color="textSecondary">
                    {props.user.data.id}
        </Typography>
                </CardContent>
            </Card>
        </Fragment>
    );
}

function mapPropsToState(state) {
    return {
        user: state.user,
        playlist: state.playlist
    }
}

export default connect(mapPropsToState, actions)(PlayList);