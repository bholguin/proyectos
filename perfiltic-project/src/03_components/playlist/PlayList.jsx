import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../01_actions/index';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import CardMedia from '@material-ui/core/CardMedia';
import ModalTracks from '../../00_utilities/modal'
import Grid from '@material-ui/core/Grid';

function PlayList(props) {
    return (
        <Fragment>
            <ModalTracks />
            <Card className='Card-content-playlist'>
                <CardHeader
                    title="Play List"
                />
                <Grid container spacing={3}>
                    {
                        props.playlist.playlist &&
                        props.playlist.playlist.map((item) =>
                            <Grid item xs={12} lg={4} md={6} key={item.id} >
                                <Card key={item.id} className='Card-info-playlist'>
                                    <CardHeader
                                        title={item.name}
                                    />
                                    <CardMedia
                                        className='img-playlist'
                                        image={item.images[0].url}
                                        title="Paella dish"
                                    />
                                    <IconButton  className='icon-play-playlist' onClick={() => props.openModal(item)}>
                                        <PlaylistPlayIcon />
                                    </IconButton>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>

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