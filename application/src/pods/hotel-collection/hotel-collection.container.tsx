import * as React from "react";
import { HotelCollectionComponent } from './hotel-collection.component'
import { HotelEntityVm } from "./hotel-collection.vm";
import {getHotelCollection, HotelEntityApi} from './hotel-collection.api';
import {mapFromApiCollectionToVmCollection} from './hotel-collection.mapper'
//import { createMockHotelCollection } from "./hotel-collection.mock";

export const HotelCollectionContainer = () => {
    const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([]);

    React.useEffect(() => {
        getHotelCollection().then((result) => {
          const hotelCollectionVm = mapFromApiCollectionToVmCollection(result);
          setHotelCollection(hotelCollectionVm);
        })
      },[]);
      
    return (
        <HotelCollectionComponent hotelCollection={hotelCollection}/>
    );
}