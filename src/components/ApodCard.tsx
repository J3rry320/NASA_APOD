import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { NASAStore } from "../typings";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
interface IAsteroidCardProps {
  pictureData: NASAStore.APODPayload;
}
export default function AsteroidCard(props: IAsteroidCardProps) {
  const classes = useStyles();
  const { title, date, explanation, copyright } = props.pictureData;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {explanation}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="small">
            &copy; {copyright}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="small">
            Clicked on {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          <ShareOutlinedIcon />
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
