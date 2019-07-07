import * as React from "react";
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelCard } from "./components/hotel-card.component";
import { makeStyles } from "@material-ui/styles";

interface Props {
    hotelCollection: HotelEntityVm[];
}

const useStyles = makeStyles({
  listLayout: {
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-between',
  }
});

export const HotelCollectionComponent = (props: Props) => {
    const {hotelCollection} = props;
    const classes = useStyles();

    return (
        <div className={classes.listLayout}>
           {
            hotelCollection.map((hotel) => <HotelCard key={hotel.id} hotel={hotel}/>)
          } 
          </div>
  );
}