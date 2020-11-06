
import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import UserInfo from '../user_info/UserInfo';
import PlayList from '../playlist/PlayList';

const IndexApp = () => {
    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        Spotify Music
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <UserInfo />
                </Grid>
                <Grid item xs={8}>
                    <PlayList />
                </Grid>
            </Grid>
        </Fragment>

    );
}

export default IndexApp;