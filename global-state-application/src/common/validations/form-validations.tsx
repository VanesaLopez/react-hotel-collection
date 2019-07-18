import { FieldValidationResult } from "lc-form-validation";

export const descriptionValidation = (value, viewModel, customParams) => {
    const isValid = value.length > 24 && value.length < 256;
    const errorMessage = 'Field must be more than 24 & lest than 256 characters.';
    const validationResult = new FieldValidationResult();
    validationResult.succeeded = isValid;
    validationResult.errorMessage = isValid ? '' : errorMessage;
    validationResult.type = 'DESCRIPTION_CASE';
  
    return validationResult;
};

export const moreThan = (value, viewModel, customParams) => {
    const isValid = parseInt(value, 10) > customParams.value;
    const errorMessage = `Field must be more than ${customParams.value}.`;
    const validationResult = new FieldValidationResult();
    validationResult.succeeded = isValid;
    validationResult.errorMessage = isValid ? '' : errorMessage;
    validationResult.type = 'MORE_CASE';
  
    return validationResult;
};

export const textSize = (value, viewModel, customParams) => {
    const isValid = value.length > 24 && value.length < 256;
    const errorMessage = 'Field must be more than 24 & lest than 256 characters.';
    const validationResult = new FieldValidationResult();
    validationResult.succeeded = isValid;
    validationResult.errorMessage = isValid ? '' : errorMessage;
    validationResult.type = 'TEXT_CASE';
  
    return validationResult;
};

export const validateImageFormat = (value, viewModel, customParams) => {
    const ext = value.substring(
        value.lastIndexOf('.') + 1).toLowerCase();
    const mimeType = ["jpeg", "jpg", "png", "gif", "bmp"];
    const isValid = mimeType.find(type => { return type === ext; }) ? true : false;
    const errorMessage = 'Field must be content a image.';
    const validationResult = new FieldValidationResult();
    validationResult.succeeded = isValid;
    validationResult.errorMessage = isValid ? '' : errorMessage;
    validationResult.type = 'FILE_CASE';
  
    return validationResult;
};