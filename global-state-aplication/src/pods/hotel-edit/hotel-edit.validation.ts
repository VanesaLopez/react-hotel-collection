import {
    createFormValidation,
    ValidationConstraints,
    Validators
  } from "lc-form-validation";
import { moreThan, textSize, validateImageFormat } from "../../common/validations/form-validations";
  
const hotelFormValidationConstraints : ValidationConstraints = {
  fields: {
    name: [{ validator: Validators.required }],
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
        validator: moreThan, customParams: { value: 2 }
      }
    ]
  }
}
  
export const HotelEditFormValidation = createFormValidation(hotelFormValidationConstraints);

  