import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Web Satck Development</Typography>
            <Box style={{display: 'flex'}}>
                <img src="https://www.annexorien.com/blog/wp-content/uploads/2020/03/web-development-delhi.jpg" className={classes.image} />
                <img src="https://www.spotcodes.com/wp-content/uploads/2021/03/web_banner.jpg" className={classes.image} />
                
            </Box>
        </Box>
    )
}

export default Home;