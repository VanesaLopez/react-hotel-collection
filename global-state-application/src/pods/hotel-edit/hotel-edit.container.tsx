import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routesLinks } from "core";
import useGlobal from "../../store";
import { HotelEntityVm } from "pods/hotel-collection/hotel-collection.vm";
import { HotelEditFormValidation } from "./hotel-edit.validation";
import { HotelEditComponent } from "./hotel-edit-component";

interface Props extends RouteComponentProps {}

export const HotelEditWithRouter = (props: Props) => {
  const [globalState, globalActions] = useGlobal();

    const goBack = () => {      
      props.history.push(routesLinks.hotelCollection);
    }

    React.useEffect(() => {
      const hotel = globalState.hotelCollection.find(h => h.id === props.match.params['id']);
      if (hotel) {
        globalActions.setHotel(globalState.hotelCollection.find(h => h.id === props.match.params['id']));
      } else {
        goBack();
      }
    },[]);

    
      
    return (<HotelEditComponent 
      goBack={goBack}
      />
    );
}

export const HotelEdit = withRouter<Props>(HotelEditWithRouter);