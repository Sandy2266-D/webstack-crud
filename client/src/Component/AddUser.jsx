import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button,Select, MenuItem, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../api/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    email: '',
    phone: '',
    jobtype: "",
    dob: new Date(),
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, email, phone,jobtype,dob } = user;
    const classes = useStyles();
    let history = useHistory();
    

    const onValueChange = (e) => {
        
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('/all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Register</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
           <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">DOB</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='dob' type="date" value={dob} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">JobType</InputLabel>
                {/* <Input onChange={(e) => onValueChange(e)} name='jobtype' value={jobtype} id="my-input" /> */}
                    <Select onChange={(e) => onValueChange(e)} name='jobtype' value={jobtype}  >
                        <MenuItem value="FT">FT</MenuItem>
                        <MenuItem value="PT">PT</MenuItem>
                        <MenuItem value="consultant">Consultant</MenuItem>
                    </Select>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Submit</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;