import * as React from "react";
import useGlobalHook from "use-global-hook";
import { HotelEntityVm, HotelEditFormErrors, createDefaultHotelEditFormErrors } from "../pods/hotel-collection/hotel-collection.vm";

import * as actions from "../actions";

interface GlobalState {
    hotelCollection: HotelEntityVm[];
    hotel: HotelEntityVm;
    error: boolean;
    hotelEditFormErrors: HotelEditFormErrors;
}

const initialState: GlobalState = {
    hotelCollection: [],
    hotel: null,
    error: false,
    hotelEditFormErrors: createDefaultHotelEditFormErrors(),
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;