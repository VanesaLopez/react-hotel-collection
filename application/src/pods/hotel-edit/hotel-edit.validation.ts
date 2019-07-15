import {
    createFormValidation,
    ValidationConstraints,
    Validators
  } from "lc-form-validation";
import { moreThan, textSize, validateImageFormat } from "../../common/validations/form-validations";
  
const hotelFormValidationConstraints : ValidationConstraints = {
  fields: {
    name: [{ validator: Validators.required }, 
      { validator: moreThan, customParams: {value: 2} }],
    description: [
      { validator: Validators.required }, 
      { validator: textSize }
    ],
    picture: [
      { validator: Validators.required },
      { validator: validateImageFormat }
    ],
    rating: [
      {
        validator: moreThan, customParams: { value: 3 }
      }
    ],
    address: [{ validator: Validators.required }],
    // city: [
    //   {
    //     validator: stringNotEqualValue,
    //     customParams: { stringToCompare: noCitySelectedLiteral }
    //   }
    // ]
  }
}
  
export const HotelEditFormValidation = createFormValidation(hotelFormValidationConstraints);

  