import React from "react";
import Svg,{ Path, Defs, G } from 'react-native-svg';


const HealthIcon = props => (
  <Svg {...props} width={props.style.width || 25} height={props.style.height || 24} viewBox="0 0 25 24">
    <Defs fill={props.color || undefined}>
      <Path id="a" d="M0 .295h24.605V22.95H0z" fill={props.color || undefined}></Path>
    </Defs>
    <G fill={props.color || "none"} fillRule="evenodd">
      <G transform={{ translateX: 0.328, translateY: 0.25 }} fill={props.color || undefined}>
        <Path d="M11.513 22.622c.44.437 1.141.437 1.581 0l9.375-9.254c2.848-3.027 2.848-7.813 0-10.84A6.231 6.231 0 0 0 17.903.572h-.059a8.076 8.076 0 0 0-5.54 2.346C10.507 1.175 8.834.295 7.326.295a7.118 7.118 0 0 0-5.188 2.236A7.879 7.879 0 0 0 .015 8.429c.01.165.148.29.31.28a.296.296 0 0 0 .274-.316 7.275 7.275 0 0 1 1.96-5.448A6.543 6.543 0 0 1 7.325.891c1.397 0 2.986.88 4.727 2.611a.35.35 0 0 0 .503.005l.004-.005a7.525 7.525 0 0 1 5.284-2.33h.047a5.666 5.666 0 0 1 4.153 1.788c2.62 2.795 2.62 7.205 0 10L12.67 22.2a.546.546 0 0 1-.77 0l-6.415-6.334a.287.287 0 0 0-.413.007.303.303 0 0 0 .008.422l6.432 6.327z" stroke={props.color || "#696969"} fill={props.color || "#696969"} mask="url(#b)"></Path>
      </G>
      <Path d="M6.868 13.154a.288.288 0 0 0 .518-.05L9.422 7.81 11.208 15c.03.119.128.207.248.221h.034a.29.29 0 0 0 .26-.16l2.19-4.264 1.006 1.825a.29.29 0 0 0 .253.15h2.703c.16 0 .29-.132.29-.295a.293.293 0 0 0-.29-.296H15.37l-1.187-2.15a.289.289 0 0 0-.512 0l-2.1 4.07L9.75 6.766a.29.29 0 0 0-.358-.205.293.293 0 0 0-.195.182l-2.144 5.619-1.477-2.396a.29.29 0 0 0-.495 0l-1.353 2.215H1.504c-.16 0-.29.133-.29.296 0 .163.13.296.29.296h2.385a.29.29 0 0 0 .248-.14l1.195-1.969 1.536 2.49z" stroke={props.color || "#696969"} fill={props.color || "#696969"}></Path>
    </G>
  </Svg>
);

export default HealthIcon;
