import * as React from "react"
import Card from '@material-ui/core/Card';
import { HotelEntityVm } from "../hotel-collection.vm";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CardContent, CardMedia, Typography, CardActions, makeStyles} from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Props {
  hotel : HotelEntityVm;
  editHotel: (string) => void;
}

type CardProps = {
  size: boolean;
}

const useStyles = makeStyles({
  card: (props: CardProps) => ({
    width: props.size ? '49.7%' : '100%',
    marginTop: '1.5rem',
  }),
  cardContent: ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'   
  }),
  cardMedia: ({
    height: 300  
  }),
});

export const HotelCard = (props : Props) => {
  const {hotel, editHotel} = props;
  const matches = useMediaQuery('(min-width:45rem)');
  const cardProps: CardProps = {size: matches};
  const classes = useStyles(cardProps);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="hotel">{hotel.rating}</Avatar>
        }
        action={
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        }
        title={hotel.name}
        subheader={hotel.address}
      />
       <CardContent>
        <div className={classes.cardContent}>
        <CardMedia
          className={classes.cardMedia}
            image={hotel.picture}
            title={hotel.name}
          />
        </div>
        <Typography variant="subtitle1" gutterBottom>
            {hotel.description}
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites" onClick={() => editHotel(hotel.id)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <DeleteIcon />
        </IconButton>        
      </CardActions>
    </Card>
  )
}