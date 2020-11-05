import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../01_actions/index';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function PlayList(props) {
    console.log(props, 'playlist')

    return (
        <Fragment>
            <Card>
                <CardContent>
                    {
                        props.playlist.playlist.map((item) => 
                            <div><div><img src={item.images[0].url} /></div> {item.name}</div>
                        )
                    }
                </CardContent>
            </Card>
        </Fragment>
    );
}

function mapPropsToState(state) {
    return {
        playlist: state.playlist
    }
}

export default connect(mapPropsToState, actions)(PlayList);