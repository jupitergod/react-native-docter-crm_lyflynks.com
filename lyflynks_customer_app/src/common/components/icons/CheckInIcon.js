import React from "react";
import Svg, { Path, Defs, G, Circle, Use }  from 'react-native-svg';



const CheckInIcon = props => (
  <Svg width={props.style.width || 23} height={props.style.height || 23} viewBox="0 0 23 23">
    <G fill={props.color || "#696969"} fillRule="evenodd">
      <Path d="M22.31 11.776a.792.792 0 0 0-.795-.794l-3.513.008a.81.81 0 0 0-.803.804.797.797 0 0 0 .797.797l2.681-.009c-.42 4.752-4.43 8.504-9.283 8.52a9.174 9.174 0 0 1-6.562-2.7 9.177 9.177 0 0 1-2.703-6.558c.017-5.123 4.197-9.304 9.321-9.32a9.199 9.199 0 0 1 7.769 4.19.798.798 0 0 0 1.104.228.803.803 0 0 0 .236-1.106 10.76 10.76 0 0 0-9.1-4.91 10.89 10.89 0 0 0-7.71 3.215A10.89 10.89 0 0 0 .535 11.85a10.745 10.745 0 0 0 3.164 7.687 10.745 10.745 0 0 0 7.687 3.164 10.89 10.89 0 0 0 7.709-3.216 10.89 10.89 0 0 0 3.216-7.709z"></Path>
      <Path d="M9.504 16.36a.813.813 0 0 1-.125-.087l-3.66-3.071a.81.81 0 0 1-.098-1.145.812.812 0 0 1 1.144-.102l3.077 2.582 5.905-7.038a.88.88 0 0 1 1.242-.104.878.878 0 0 1 .113 1.242l-6.378 7.6a.879.879 0 0 1-1.22.123z"></Path>
    </G>
  </Svg>
);

export default CheckInIcon;
