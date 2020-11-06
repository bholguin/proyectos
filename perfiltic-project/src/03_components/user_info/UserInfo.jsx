import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../01_actions/index';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

function UserInfo(props) {
 
    return (
        <Fragment>
            <Card className='Card-info'>
                <Avatar className='avatar'/>
                <CardContent className='MuiCardContent-root-userinfo'>

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
    }
}

export default connect(mapPropsToState, actions)(UserInfo);