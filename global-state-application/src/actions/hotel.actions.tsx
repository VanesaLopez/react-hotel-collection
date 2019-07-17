import { HotelEntityVm } from "pods/hotel-collection/hotel-collection.vm";

export const setHotelCollection = (store, hotelCollection: HotelEntityVm[]) => {
    store.setState({ hotelCollection });
};

export const changeHotel = (store, hotel: HotelEntityVm) => {
    const hotelCollection = store.state.hotelCollection.map(h => {
        if(h.id === hotel.id) {
            return hotel;
        } else {
            return h;
        }
     });
    store.setState({ hotelCollection });
}

export const setHotel = (store, hotel: HotelEntityVm) => {
    store.setState({ hotel });
};