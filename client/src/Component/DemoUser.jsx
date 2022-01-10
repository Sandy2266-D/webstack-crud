import react, { useState,useEffect } from 'react';
import { Grid, TextField,makeStyles} from '@material-ui/core';
import { addUser } from '../api/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    email: '',
    phone: '',
    jobtype: "",
    dob: new Date(),
}

const useStyles = makeStyles(theme=> ({
    
    root:{
        '& . MuiFormControl-root':{
            width: "80%",
            margin: theme.spacing(1)
        }
    }
}))

const DemoUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, email, phone,jobtype,dob } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField variant="outlined"
                    label= "Name"
                    name="name"
                    value={name}
                    onChange={(e) => onValueChange(e)} 
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="outlined"
                    label= "Email"
                    value={email}
                    />
                </Grid>
            </Grid>
        </form>
    )
}

export default DemoUser;