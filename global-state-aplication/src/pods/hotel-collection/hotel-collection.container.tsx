import * as React from "react";
import { HotelCollectionComponent } from './hotel-collection.component'
import { HotelEntityVm } from "./hotel-collection.vm";
import { getHotelCollection } from './hotel-collection.api';
import {mapFromApiCollectionToVmCollection} from './hotel-collection.mapper';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routesLinks } from "core";
import useGlobal from "../../store";

interface Props extends RouteComponentProps {}

export const HotelCollectionContainerWithRouter = (props: Props) => {
  const [globalState, globalActions] = useGlobal();

  const editHotel = (hotelId: string) => {      
    props.history.push(routesLinks.hotelEdit(hotelId));
  }

  React.useEffect(() => {
    if (!globalState.hotelCollection.length) {
      getHotelCollection().then((result) => {
        const hotelCollectionVm = mapFromApiCollectionToVmCollection(result);
        globalActions.setHotelCollection(hotelCollectionVm);      
      })
    }
  },[]);

  const deleteHotel= (id: string): void => {
    // TODO: Api call
    const newHotelCollection = globalState.hotelCollection.filter(h => h.id !== id);
    globalActions.setHotelCollection(newHotelCollection);    
  };

  return (
  <>
    <HotelCollectionComponent 
      hotelCollection={globalState.hotelCollection}
      editHotel={editHotel}
      deleteHotel={deleteHotel}
    />
    </>
  );
}

export const HotelCollectionContainer = withRouter<Props>(HotelCollectionContainerWithRouter);