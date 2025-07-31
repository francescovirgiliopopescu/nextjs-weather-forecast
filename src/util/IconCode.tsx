import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaSmog,
  FaCloudRain,
  FaCloudMoonRain,
  FaCloudSunRain,
  FaSnowflake,
  FaSnowman,
  FaBolt,
  FaCloudShowersHeavy,
} from "react-icons/fa";

import sun_img from "@public/img/icons/sun.png";
import cloud_sun_img from "@public/img/icons/cloud_sun.png";
import cloud_img from "@public/img/icons/cloud.png";
import smog_img from "@public/img/icons/smog.png";
import cloud_rain_img from "@public/img/icons/cloud_rain.png";
import bolt_img from "@public/img/icons/bolt.png";
import cloud_snow_img from "@public/img/icons/cloud_snow.png";

export function getIcon(code: number): StaticImageData {
  let IconComponent: StaticImageData;

  switch (code) {
    case 0:
    case 1:
      IconComponent = sun_img;
      break;
    case 2:
      IconComponent = cloud_sun_img;
      break;
    case 3:
      IconComponent = cloud_img;
      break;
    case 45:
    case 48:
      IconComponent = smog_img;
      break;
    case 51:
    case 53:
    case 55:
      IconComponent = cloud_rain_img;
      break;
    case 56:
    case 57:
      IconComponent = cloud_rain_img; // cloud with rain at night
      break;
    case 61:
    case 63:
    case 65:
      IconComponent = cloud_rain_img; // cloud with sun and rain
      break;
    case 66:
    case 67:
      IconComponent = cloud_rain_img;
      break;
    case 71:
    case 73:
    case 75:
      IconComponent = cloud_snow_img;
      break;
    case 77:
      IconComponent = cloud_snow_img;
      break;
    case 80:
    case 81:
    case 82:
      IconComponent = cloud_rain_img; // cloud with showers
      break;
    case 85:
    case 86:
      IconComponent = cloud_snow_img;
      break;
    case 95:
      IconComponent = bolt_img;
      break;
    case 96:
    case 99:
      IconComponent = cloud_img;
      break;

    default:
      IconComponent = sun_img; // Provide a default icon or handle unknown codes
      break;
  }

  return IconComponent;
}

// export function GetIcon2({ code }: any) {
//   let IconComponent: IconType;

//   switch (code) {
//     case 0:
//     case 1:
//       IconComponent = FaSun;
//       break;
//     case 2:
//       IconComponent = FaCloudSun;
//       break;

//     default:
//       IconComponent = FaSun; // Provide a default icon or handle unknown codes
//       break;
//   }

//   return <IconComponent />;

//   // <GetIcon />
// }

// export function getIcon(code:number): IconType{
//   let IconComponent;

//   switch (code) {
//     case 0:
//     case 1:
//       IconComponent = FaSun;
//       break;
//     case 2:
//       IconComponent = FaCloudSun;
//       break;
//     default:
//       IconComponent = FaSun; // Provide a default icon or handle unknown codes
//       break;
//   }

//   return IconComponent;
// }
// function customIcon(icon:React.ReactNode): JSX.Element {
//   return (
//     <svg
//       className={`w-20 h-20 object-contain `} // Apply passed class names
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 20 20"
//       fill="currentColor"
//     >
//       {/*  icon content */}
//       {/* ... */}
//     </svg>
//   );
// };

// const weatherIconMap = {
//     51: FaCloudRain,
//     53: FaCloudRain,
// };
// const WeatherIcon = ({ code }) => {
//     const IconComponent = weatherIconMap[code] || DefaultIcon;

//     return <IconComponent />;
//   };
