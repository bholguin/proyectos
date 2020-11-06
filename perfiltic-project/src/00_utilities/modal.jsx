import React, {useEffect} from 'react'

import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux';

import * as actions from '../01_actions/index'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function ModalTracks(props) {
    console.log(props)
    return (
        <Dialog fullScreen open={props.modal.open} onClose={props.closeModal} TransitionComponent={Transition}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={props.closeModal} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        {props.modal.data_list.pl}
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem button>
                    <ListItemText primary="song 1" secondary="info" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Song 2" secondary="info" />
                </ListItem>
            </List>
        </Dialog>
    );
}


function mapPropsToState(state) {
    return {
        modal: state.modal
    }
}

export default connect(mapPropsToState, actions)(ModalTracks);


