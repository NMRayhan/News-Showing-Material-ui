import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    avatar: {
        backgroundColor: red[500],
    },
});

const NewsArticle = (props) => {
    const { urlToImage, url, publishedAt, description, author, title } = props.newsDetails
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} className="my-2">
                <CardActionArea>
                    <CardHeader
                        avatar={<Avatar aria-label="recipe" className={classes.avatar}>{author[0]}</Avatar>}
                        title={author}
                        subheader={publishedAt}
                    />
                    <CardMedia
                        className={classes.media}
                        image={urlToImage}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary" href={url} target="_blank">Full News</Button>
                </CardActions>
            </Card>
        </div >
    );
};

export default NewsArticle;
