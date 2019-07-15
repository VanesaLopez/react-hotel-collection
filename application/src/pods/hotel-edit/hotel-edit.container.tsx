import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routesLinks } from "core";
import { getHotel } from "pods/hotel-collection/hotel-collection.api";
import { mapFromApiToVm } from "pods/hotel-collection/hotel-collection.mapper";
import { HotelEntityVm, HotelEditFormErrors, createDefaultHotelEditFormErrors } from "pods/hotel-collection/hotel-collection.vm";
import { HotelEditComponent } from "./hotel-edit-component";
import { HotelEditFormValidation } from "./hotel-edit.validation";

interface Props extends RouteComponentProps {}

export const HotelEditWithRouter = (props: Props) => {
  const [hotelEditFormErrors, setHotelEditFormErrors] = React.useState<HotelEditFormErrors>(createDefaultHotelEditFormErrors());
  const [hotel, setHotel] = React.useState<HotelEntityVm>();

  React.useEffect(() => {
    const id = props.match.params['id'];
    getHotel(id).then((result) => {
      const hotelVm = mapFromApiToVm(result);
      setHotel(hotelVm);
    });
    
  },[]);

  const goBack = () => {      
    props.history.push(routesLinks.hotelCollection);
  }

  const handleOnChange = (field: string, value: any) => {
    setHotel({
      ...hotel,
      [field]: value
    });

    HotelEditFormValidation
      .validateField(hotel, field, value)
      .then(fieldValidationResult => {
        if (fieldValidationResult) {
          setHotelEditFormErrors({
            ...hotelEditFormErrors,
            [field]: fieldValidationResult
          });
        }
      });

  };

    
  return (<HotelEditComponent
    hotel={hotel}
    handleOnChange={handleOnChange}
    formErrors={hotelEditFormErrors}
    />
  );
}

export const HotelEdit = withRouter<Props>(HotelEditWithRouter);