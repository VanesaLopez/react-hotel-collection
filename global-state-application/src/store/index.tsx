import * as React from "react";
import useGlobalHook from "use-global-hook";
import { HotelEntityVm } from "../pods/hotel-collection/hotel-collection.vm";

import * as actions from "../actions";

const initialState = {
    hotelCollection: [] as HotelEntityVm[]
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;