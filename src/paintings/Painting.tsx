// This will be the infinite scrolling page which will also send off fetch requests to the new pages
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./styles.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
});

export const Painting = (props: any) => {
    const classes = useStyles();

    return (
        <div className="card">
            <Card raised={false} className={classes.root}>
                <CardMedia
                    component="img"
                    height="400"
                    image={props.painting.primaryimageurl}
                    title={props.painting.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.painting.title}
                </Typography>
                {props.painting.peoplecount > 0 &&
                    <Typography variant="body2" color="secondary" component="p">
                        {props.painting.people.length > 0 && props.painting.people[0].displayname}
                    </Typography>
                }
                <Typography variant="body2" color="textPrimary" component="h4">
                    {props.painting.dated}
                </Typography>
                
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.painting.classification}
                </Typography>
                </CardContent>
            </Card>
        </div>
        
    );

}