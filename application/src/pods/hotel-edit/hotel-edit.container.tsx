import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routesLinks } from "core";
import { getHotel } from "pods/hotel-collection/hotel-collection.api";
import { mapFromApiCollectionToVmCollection } from "pods/hotel-collection/hotel-collection.mapper";
import { HotelEntityVm } from "pods/hotel-collection/hotel-collection.vm";

interface Props extends RouteComponentProps {}

export const HotelEditWithRouter = (props: Props) => {

    const goBack = () => {      
      props.history.push(routesLinks.hotelCollection);
    }

    React.useEffect(() => {
      const id = props.match.params['id'];
      
      },[]);
      
    return (<div>Edit</div>
    );
}

export const HotelEdit = withRouter<Props>(HotelEditWithRouter);