import { FieldValidationResult } from "lc-form-validation";

export interface HotelEntityVm {
    id: string;
    picture: string;
    name: string;
    description: string;
    rating: number;
    address: string;
}

export interface HotelEditFormErrors {
    name: FieldValidationResult;
    picture: FieldValidationResult;
    rating: FieldValidationResult;
    description: FieldValidationResult;
    address: FieldValidationResult;
}

export const createDefaultHotelEditFormErrors = () : HotelEditFormErrors => ({
    name: new FieldValidationResult(),
    picture: new FieldValidationResult(),
    rating: new FieldValidationResult(),
    description: new FieldValidationResult(),
    address: new FieldValidationResult()
})

  