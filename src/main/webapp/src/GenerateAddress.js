/*import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import orange from '@material-ui/core/colors/orange';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: orange,
        secondary: {
            main: '#ff9800',
        },
    },
});

class GenerateAddress extends Component {
    render() {
        return(
            <MuiThemeProvider theme={theme}>
                <div className="fab">
                    <Fab color="secondary" aria-label="Add" size="medium" >
                        <AddIcon />
                    </Fab>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default GenerateAddress;
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function ContainedButtons() {
    const classes = useStyles();

    return (
        <div>
            <Button variant="contained" color="primary" className={classes.button}>
                Generate Address
            </Button>
        </div>
    );
}