import React from 'react';
// import {Card, CardContent, Typography, Grid} from "@material-ui/core";

const Carditem = (props) => {
  console.log(props);
  return <div>{`this is active cases ${props.active}`}</div>;
};
export default Carditem;
