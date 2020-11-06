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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function PlayList(props) {
    console.log(props, 'playlist')

    return (
        <Fragment>
            <ModalTracks />
            <Card className='Card-content'>
                <CardHeader

                    title="Play List"
                />
                {
                    props.playlist.playlist.map((item) =>
                        <Card key={item.id} className='Card-info-playlist'>
                            <CardContent >
                                <Grid container spacing={3}>
                                    <Grid item xs={2}>
                                        <img className='img-playlist' src={item.images[0].url} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <IconButton onClick={() => props.openModal({id: item.id, pl: item.name})}>
                                            <ViewList />
                                        </IconButton>
                                    </Grid>
                                </Grid>
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