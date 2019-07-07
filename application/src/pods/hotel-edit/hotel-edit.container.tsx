import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routesLinks } from "core";

interface Props extends RouteComponentProps {}

export const HotelEditWithRouter = (props: Props) => {

    const goBack = () => {      
      props.history.push(routesLinks.hotelCollection);
    }

    React.useEffect(() => {
      },[]);
      
    return (<div>Edit</div>
    );
}

export const HotelEdit = withRouter<Props>(HotelEditWithRouter);