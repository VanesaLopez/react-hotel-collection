import * as React from "react";
import {
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import { TextFieldForm, RatingForm } from "common/components";
import { TextField, Button } from "@material-ui/core";
import { HotelEntityVm, HotelEditFormErrors } from "../hotel-collection/hotel-collection.vm";
// import { HotelEntityVm, HotelFormErrors } from "./hotel-edit.vm";
// import { LookupEntity } from "core";

const styles = () =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "1rem 2rem"
    },
    picture: {
      maxWidth: "100%",
      height: "15rem"
    }
  });

interface Props extends WithStyles<typeof styles> {
  hotel: HotelEntityVm;
  handleOnChange: (field: string, value: any) => void;
  formErrors: HotelEditFormErrors;
}

export const HotelEditComponentInner = (props: Props) => {
  const { classes, hotel, handleOnChange, formErrors } = props;

  const displayHotel = () => {
    if (hotel) {
      return (      
        <div className={classes.formContainer}>
          <TextFieldForm
            label="Name"
            name="name"
            value={hotel.name}
            onChange={handleOnChange}
            error={formErrors.name.errorMessage}
          />

          <img className={classes.picture} src={hotel.picture} />

          <TextFieldForm
             label="Picture"
             name="picture"
             value={hotel.picture}
             onChange={handleOnChange}
             error={formErrors.picture.errorMessage}
          />
    
          <RatingForm
            name="rating"
            value={hotel.rating}
            max={5}
            onChange={handleOnChange}
            error={formErrors.rating.errorMessage}
          />
    
          <TextFieldForm
            name="description"
            label="Description"
            value={hotel.description}
            multiline={true}
            onChange={handleOnChange}
            error={formErrors.description.errorMessage}
          />
    
          <Button variant="contained" color="primary" onClick={()=>{}}>
            Save
          </Button>
        </div>
      );

    } else {
      return <div>esperando ....</div>;
    }
  };

  return (    
    displayHotel()  
  );
};

export const HotelEditComponent = withStyles(styles)(HotelEditComponentInner);