import * as React from "react";
import { HotelCollectionComponent } from './hotel-collection.component'
import { HotelEntityVm } from "./hotel-collection.vm";
import { getHotelCollection } from './hotel-collection.api';
import { mapFromApiCollectionToVmCollection } from './hotel-collection.mapper';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routesLinks } from "core";

interface Props extends RouteComponentProps {};

export const HotelCollectionContainerWithRouter = (props: Props) => {
  const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([]);
  
  React.useEffect(() => {
    getHotelCollection().then((result) => {
      const hotelCollectionVm = mapFromApiCollectionToVmCollection(result);
      setHotelCollection(hotelCollectionVm);
    });
  },[]);
  
  const editHotel = (hotelId: string): void => {      
    props.history.push(routesLinks.hotelEdit(hotelId));    
  };

  const deleteHotel= (id: string): void => {
    const newHotelCollection = hotelCollection.filter(h => h.id !== id);
    setHotelCollection(newHotelCollection);
  };

  return (
    <>
      <HotelCollectionComponent 
        hotelCollection={hotelCollection}
        editHotel={editHotel}
        deleteHotel={deleteHotel}
      />
      </>
  );
}

export const HotelCollectionContainer = withRouter<Props>(HotelCollectionContainerWithRouter);