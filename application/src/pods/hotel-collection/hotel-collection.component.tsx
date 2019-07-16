import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelCard } from "./components/hotel-card.component";

interface Props {
    hotelCollection: HotelEntityVm[];
    editHotel: (string) => void;
    deleteHotel: (string) => void;
}

const useStyles = makeStyles({
  listLayout: {
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-between',
  },
    progress: {
      justifyContent: "center",
      margin: "auto",
      marginTop: "2rem",
    }
});

export const HotelCollectionComponent = (props: Props) => {
    const {hotelCollection, editHotel, deleteHotel} = props;
    const classes = useStyles({});

    return (
        <div className={classes.listLayout}>
           { hotelCollection.length ?
              hotelCollection.map((hotel) => <HotelCard 
                key={hotel.id} 
                hotel={hotel}
                editHotel={editHotel}
                deleteHotel={deleteHotel}
                />)
              :
              <CircularProgress 
                className={classes.progress}
                size={100} />
          } 
          </div>
  );
}