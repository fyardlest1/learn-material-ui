import React from 'react'
import {
    Typography,
    CardActions,
    Card,
    CardContent,
    AppBar,
    CardMedia,
    CssBaseline,
    Container,
    Grid,
    Toolbar,
    Button
} from '@material-ui/core'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import useStyles from './appStyles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
    const classes = useStyles()

    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCameraIcon className={classes.icon} />
                    <Typography variant='h6' >Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main style={{background: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'}}>
                <div className={classes.container}>
                    <Container maxWidth='sm'>
                        <Typography variant="h2" color='textPrimary' align='center' gutterBottom >Photo Album</Typography>                        
                        <Typography variant="h5" color='textSecondary' align='center' paragraph >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis temporibus assumenda magnam nobis. Maiores, asperiores?
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card} >
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title='Image Title'
                                    />
                                    <CardContent className={classes.CardContent}>
                                        <Typography variant='h5' gutterBottom>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>View</Button>
                                        <Button size='small' color='primary'>Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer} style={{background: 'linear-gradient(to right top, #051937, #021b43, #021d4f, #081f5b, #141f66)'}} >
                <Typography variant='h6' color='text.primary' align='center' gutterBottom>copyright</Typography>
                <Typography variant='subtitle1' color='text.secondary' align='center' gutterBottom>
                    Some good stuff you want to know about material ui!
                </Typography>
            </footer>
        </>
    )
}

export default App
