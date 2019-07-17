import React from 'react';
import PropTypes from 'prop-types';
// material
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class LoginComponent extends React.Component  {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  submit = () => {
    this.setState({ open: false });
  };

  render() {

    return (
      <div>
        
          <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Adresse email"
              type="email"
            />
            <TextField
              margin="dense"
              id="password"
              label="Mot de passe"
              type="password"
            />
            <Button onClick={this.submit} color="primary" autoFocus>
              Connexion
            </Button>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(LoginComponent);