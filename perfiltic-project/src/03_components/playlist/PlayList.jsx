import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../01_actions/index';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function PlayList(props) {
    console.log(props, 'playlist')
    var t = null;
    useEffect(() => {
        props.getPlaylist(props.user.data.id);

        if(props.playlist.playlist.items!==undefined){
            t = props.playlist.playlist.items.map((item) => {
                <div><img src={item.images[0]} /> {item.name}
            </div>
            });
        }
    }, []);
    console.log(props.playlist.playlist)
 


    return (
        <Fragment>
            <Card>
                <CardContent>
                    {t}
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