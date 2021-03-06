import React from "react";
import Svg, { Path }  from 'react-native-svg';


const EditIcon = props => (
  <Svg {...props} width={props.style.width || 23} height={props.style.height || 22} viewBox="0 0 23 22">
    <Path d="M18.116 3.946a.817.817 0 0 1 0 1.154L5.609 17.56a.817.817 0 0 1-1.153 0 .817.817 0 0 1 0-1.154L16.962 3.946a.819.819 0 0 1 1.154 0zm2.647-2.489a4.427 4.427 0 0 1 1.318 3.163 4.435 4.435 0 0 1-1.318 3.163l-.44.439a.824.824 0 0 1-1.158 0 .817.817 0 0 1 0-1.154l.44-.44c.54-.538.836-1.253.836-2.013s-.295-1.475-.836-2.013l-.136-.136a2.842 2.842 0 0 0-2.02-.833c-.764 0-1.481.294-2.022.833L2.248 15.593l-.508 4.674 4.69-.511L16.65 9.57a.825.825 0 0 1 1.157 0 .817.817 0 0 1 0 1.154L7.38 21.114a.809.809 0 0 1-.49.234l-5.986.647C.877 22 .845 22 .818 22a.82.82 0 0 1-.813-.905l.65-5.964a.829.829 0 0 1 .236-.489l13.383-13.33A4.46 4.46 0 0 1 17.448 0c1.2 0 2.325.466 3.175 1.312l.14.145z" fill={props.color || "#696969"} fillRule="evenodd"></Path>
  </Svg>
);

export default EditIcon;
