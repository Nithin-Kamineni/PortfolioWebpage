import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

interface CardLayoutData {
  stackIndex: number;
  title: string;
  lastSeenDate: string;
  image: string;
  imagetitle: string;
  description: string;
  liked: boolean;
  extraData: string[];
}

interface valueprops {
  value: CardLayoutData;
}

export default function CardLayout(props: valueprops) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const stack = props.value;

  const navigate = useNavigate();

  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={stack.title} //misc, maths, linear algebra, calclus, statestics, NLP, AI and ML,
        subheader={`last seen ${stack.lastSeenDate}`}
      />
      <CardMedia
        className={classes.media}
        image={stack.image}
        title={stack.title} //misc, maths, linear algebra, calclus, statestics, NLP, AI and ML,
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          view '{stack.description}' stack
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: "grey" }} />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() => {
            navigate(`${stack.stackIndex}`);
          }}
        >
          <SendIcon style={{ color: "green" }} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          {stack.extraData.map((data) => {
            return <Typography paragraph>{data}</Typography>;
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
