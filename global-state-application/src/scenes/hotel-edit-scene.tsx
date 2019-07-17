import * as React from "react"
import { Link } from "react-router-dom";
import { routesLinks } from "core";
import { AppLayout } from "layout";
import { HotelEdit } from "pods/hotel-edit";

export const HotelEditScene = () =>
    <AppLayout>
        <HotelEdit />
    </AppLayout>