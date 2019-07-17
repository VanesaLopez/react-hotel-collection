import { HotelEditFormErrors } from "pods/hotel-collection/hotel-collection.vm";

export const setError = (store, error: boolean) => {
    store.setState({ error });
};

export const setHotelEditFormErrors = (store, hotelEditFormErrors: HotelEditFormErrors) => {
    store.setState({ hotelEditFormErrors });
};