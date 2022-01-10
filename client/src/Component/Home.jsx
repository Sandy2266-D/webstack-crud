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
            <Typography variant="h4">Code for Interview</Typography>
            <Box style={{display: 'flex'}}>
                <img src="https://rubygarage.s3.amazonaws.com/uploads/article_image/file/709/technology-stack-diagram.jpg" className={classes.image} />
                
            </Box>
        </Box>
    )
}

export default Home;