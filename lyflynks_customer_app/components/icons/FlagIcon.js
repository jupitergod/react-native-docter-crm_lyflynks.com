import React from "react";
import {Svg} from "expo";
const { Path, Defs, G, Use } = Svg;

const FlagIcon = props => (
  <Svg width={props.style.width || 27} height={props.style.height || 33} viewBox="0 0 27 33">
    <Defs >
      <Path d="M12.597 1.321v4.718c0 .106.074.21.176.246l4.272 1.477c-.609 1.385-1.674 2.054-2.982 2.445-1.389.415-3.015.505-4.473.82-1.633.354-3.127 1.056-3.978 2.774l-4.247-7a.244.244 0 0 0 .017-.049c.65-1.592 1.795-2.205 3.242-2.56 1.48-.362 3.224-.395 4.799-.787 1.259-.313 2.405-.916 3.174-2.084m.268-1.32c-.102 0-.222.087-.251.171-.629 1.694-1.83 2.354-3.317 2.724-1.487.37-3.24.404-4.807.788-1.437.352-2.717 1.04-3.46 2.568l-.527-.878a.275.275 0 0 0-.252-.13c-.139.004-.251.135-.251.27 0 .045.008.091.034.131l10.185 16.804c.048.08.14.13.234.13a.279.279 0 0 0 .138-.036.274.274 0 0 0 .097-.365l-4.74-7.811c0-.003-.002-.006 0-.009.742-1.818 2.09-2.452 3.76-2.814 1.395-.302 3.037-.395 4.514-.837 1.478-.441 2.807-1.268 3.451-3.003a.232.232 0 0 0 .017-.09.275.275 0 0 0-.176-.254l-4.38-1.518V.262C13.137.105 12.997 0 12.864 0" id="b"></Path>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <G transform="translate(5 3)">
        <Use fill="#000" filter="url(#a)"></Use>
        <Use stroke="#696969" fill="#727272"></Use>
      </G>
    </G>
  </Svg>
);

export default FlagIcon;
