import * as React from "react";
import {
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import { TextFieldForm, RatingForm } from "common/components";
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import useGlobal from "../../store";
import { HotelEditFormValidation } from "./hotel-edit.validation";

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
    },
    progress: {
      justifyContent: "center",
      margin: "auto",
      marginTop: "2rem",
    }
  });

interface Props extends WithStyles<typeof styles> {
  goBack: () => void;
}

export const HotelEditComponentInner = (props: Props) => {
  const [globalState,  globalActions] = useGlobal();
  const { classes, goBack } = props;

  const handleOnChange = (field: string, value: any) => {
    globalActions.setHotel({
      ...globalState.hotel,
      [field]: value
    });

    HotelEditFormValidation
      .validateField(globalState.hotel, field, value)
      .then(fieldValidationResult => {
        if (fieldValidationResult) {
          globalActions.setError(!fieldValidationResult.succeeded);
          globalActions.setHotelEditFormErrors({
            ...globalState.hotelEditFormErrors,
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
  
  const displayHotel = () => {
    if (globalState.hotel) {
      return (      
        <>
          <TextFieldForm
            label="Name"
            name="name"
            value={globalState.hotel.name}
            onChange={handleOnChange}
            error={globalState.hotelEditFormErrors.name.errorMessage}
          />

          <img className={classes.picture} src={globalState.hotel.picture} />

          <TextFieldForm
             label="Picture"
             name="picture"
             value={globalState.hotel.picture}
             onChange={handleOnChange}
             error={globalState.hotelEditFormErrors.picture.errorMessage}
          />
    
          <RatingForm
            name="rating"
            value={globalState.hotel.rating}
            max={5}
            onChange={handleOnChange}
            error={globalState.hotelEditFormErrors.rating.errorMessage}
          />
    
          <TextFieldForm
            name="description"
            label="Description"
            value={globalState.hotel.description}
            multiline={true}
            onChange={handleOnChange}
            error={globalState.hotelEditFormErrors.description.errorMessage}
          />
    
          <Button 
            disabled={globalState.error}
            variant="contained" 
            color="primary" 
            onClick={()=>{ saveHotel(globalState.hotel) }}>
            Save
          </Button>
        </>
      );

    } else {
      return <CircularProgress 
        className={classes.progress}
        size={100} />;
    }
  };

  return (   
    <div className={classes.formContainer}>
      {displayHotel()}
    </div> 
  );
};

export const HotelEditComponent = withStyles(styles)(HotelEditComponentInner);