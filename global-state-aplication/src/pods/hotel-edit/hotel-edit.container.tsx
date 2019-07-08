import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routesLinks } from "core";
import { getHotel } from "pods/hotel-collection/hotel-collection.api";
import { mapFromApiCollectionToVmCollection } from "pods/hotel-collection/hotel-collection.mapper";
import useGlobal from "../../store";
import { HotelEntityVm } from "pods/hotel-collection/hotel-collection.vm";

interface Props extends RouteComponentProps {}

export const HotelEditWithRouter = (props: Props) => {
  const [globalState, globalActions] = useGlobal();
  let hotel:HotelEntityVm = null;

    const goBack = () => {      
      props.history.push(routesLinks.hotelCollection);
    }

    React.useEffect(() => {
      hotel = globalState.hotelCollection.find(h => h.id === props.match.params['id']);
      
      },[]);
      
    return (<div>Edit</div>
    );
}

export const HotelEdit = withRouter<Props>(HotelEditWithRouter);