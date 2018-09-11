import React from "react";
import {Svg} from "react-native-svg";
const { Path, Defs, G } = Svg;


const AlertIcon = props => (
  <Svg {...props} width={props.style.width || 22} height={props.style.height || 22} viewBox="0 0 22 22">
    <Defs fill={props.color || undefined}>
      <Path id="a" d="M0 .04h21.96V22H0z" fill={props.color || undefined}></Path>
    </Defs>
    <G fill={props.color || "none"} fillRule="evenodd">
      <G fill={props.color || undefined}>
        <Path d="M17.192 17.23A8.785 8.785 0 1 1 4.769 4.808 8.785 8.785 0 0 1 17.192 17.23M3.734 3.773c-4.001 4.002-4.001 10.49 0 14.491 4.002 4.002 10.49 4.002 14.491 0 4.002-4.002 4.002-10.49 0-14.49-4.002-4.002-10.489-4.002-14.49 0" fill={props.color || "#696969"} mask="url(#b)"></Path>
      </G>
      <Path d="M10.047 4.725c.256-.288.596-.432 1.016-.432.509 0 .85.185 1.021.552.173.369.257.9.257 1.593 0 .41-.02.823-.062 1.245l-.38 4.577c-.042.545-.131.963-.267 1.254-.138.291-.36.437-.674.437-.322 0-.543-.142-.668-.424-.125-.28-.213-.71-.266-1.286l-.286-4.447a34.991 34.991 0 0 1-.08-1.866c.001-.514.13-.915.389-1.203M11.944 17.348c-.268.24-.577.36-.935.36-.361 0-.676-.12-.945-.356-.27-.236-.405-.567-.405-.991 0-.37.129-.687.387-.948.257-.26.573-.389.947-.389s.69.13.954.39c.265.26.394.577.394.947 0 .419-.131.747-.397.987" fill={props.color || "#696969"}></Path>
    </G>
  </Svg>
);

export default AlertIcon;
