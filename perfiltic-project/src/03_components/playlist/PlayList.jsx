import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../01_actions/index';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ViewList from '@material-ui/icons/ViewList'
import ModalTracks from '../../00_utilities/modal'

function PlayList(props) {
    console.log(props, 'playlist')

    return (
        <Fragment>
            <ModalTracks/>
            <Card>
                <CardHeader

                    title="Play List"
                />
                {
                    props.playlist.playlist.map((item) =>
                        <Card key={item.id} style={{ margin: "10px" }}>
                            <CardContent >
                                <div style={{ display: 'inline-flex' }}>
                                    <img style={{ width: '150px', marin: '10px' }} src={item.images[0].url} />
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.name}
                                    </Typography>
                                </div>
                                <IconButton onClick={() => props.openModal()}>
                                    <ViewList />
                                </IconButton>
                            </CardContent>
                        </Card>
                    )
                }
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