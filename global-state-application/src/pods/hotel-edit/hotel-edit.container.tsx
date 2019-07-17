import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routesLinks } from "core";
import useGlobal from "../../store";
import { HotelEntityVm, HotelEditFormErrors, createDefaultHotelEditFormErrors } from "pods/hotel-collection/hotel-collection.vm";
import { HotelEditFormValidation } from "./hotel-edit.validation";
import { HotelEditComponent } from "./hotel-edit-component";

interface Props extends RouteComponentProps {}

export const HotelEditWithRouter = (props: Props) => {
  const [globalState, globalActions] = useGlobal();
  const [hotelEditFormErrors, setHotelEditFormErrors] = React.useState<HotelEditFormErrors>(createDefaultHotelEditFormErrors());
  const [hotel, setHotel] = React.useState<HotelEntityVm>();
  const [error, seterror] = React.useState(false);

    const goBack = () => {      
      props.history.push(routesLinks.hotelCollection);
    }

    React.useEffect(() => {
      const hotel = globalState.hotelCollection.find(h => h.id === props.match.params['id']);
      if (hotel) {
        setHotel(globalState.hotelCollection.find(h => h.id === props.match.params['id']));
      } else {
        goBack();
      }
    },[]);

    const handleOnChange = (field: string, value: any) => {
      setHotel({
        ...hotel,
        [field]: value
      });
  
      HotelEditFormValidation
        .validateField(hotel, field, value)
        .then(fieldValidationResult => {
          if (fieldValidationResult) {
            seterror(!fieldValidationResult.succeeded);
            setHotelEditFormErrors({
              ...hotelEditFormErrors,
              [field]: fieldValidationResult
            });
          }
        });
  
    };

    const saveHotel = (hotel: HotelEntityVm) => {
      // TODO: add api call
      globalActions.changeHotel(hotel);
      goBack();
    }  
      
    return (<HotelEditComponent
      hotel={hotel}
      handleOnChange={handleOnChange}
      formErrors={hotelEditFormErrors}
      saveHotel={saveHotel}
      disabled={error}
      />
    );
}

export const HotelEdit = withRouter<Props>(HotelEditWithRouter);