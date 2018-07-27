import React from "react";
import {Svg} from "expo";
const { Path } = Svg;


const CalendarIcon = props => (
  <Svg {...props} width={props.style.width || 22} height={props.style.height || 22} viewBox="0 0 22 22">
    <Path d="M6.241 4.532c0 .229-.21.415-.467.415s-.467-.186-.467-.415V1.635c0-.229.21-.415.467-.415.258 0 .467.186.467.415v2.897zm10.034 0c0 .229-.21.415-.467.415s-.467-.186-.467-.415V1.635c0-.229.21-.415.467-.415.258 0 .467.186.467.415v2.897zm-10.5 1.635c1.015 0 1.841-.733 1.841-1.635v-.67h6.35v.67c0 .902.827 1.635 1.842 1.635 1.016 0 1.843-.733 1.843-1.635v-.67h1.302c.702 0 1.274.507 1.274 1.131v3.09H1.375v-3.09c0-.624.572-1.132 1.275-1.132h1.282v.671c0 .902.826 1.635 1.842 1.635zm13.178-3.526c1.461 0 2.65 1.055 2.65 2.352v4.418c0 .336-.309.61-.688.61-.38 0-.688-.274-.688-.61v-.108H1.375v4.003c0 .336-.308.61-.687.61-.38 0-.688-.274-.688-.61V4.993C0 3.696 1.19 2.641 2.65 2.641h1.282V1.635C3.932.734 4.758 0 5.774 0s1.842.734 1.842 1.635v1.006h6.35V1.635c0-.901.827-1.635 1.842-1.635 1.016 0 1.843.734 1.843 1.635v1.006h1.302zm1.962 11.804c.379 0 .688.273.688.61v4.264c0 1.297-1.189 2.352-2.65 2.352H2.65C1.19 21.67 0 20.616 0 19.319v-3.2c0-.337.308-.61.687-.61.38 0 .688.273.688.61v3.2c0 .624.572 1.131 1.275 1.131h16.302c.704 0 1.275-.507 1.275-1.131v-4.264c0-.337.309-.61.688-.61zm0-3.66c.379 0 .688.273.688.61v.324c0 .336-.309.61-.688.61-.38 0-.688-.274-.688-.61v-.325c0-.336.309-.61.688-.61z" fill={props.color || "#696969"} fillRule="evenodd"></Path>
  </Svg>
);

export default CalendarIcon;
