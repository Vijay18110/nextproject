// import { FourSquare } from 'react-loading-indicators'
// const Loader = () => {
//     return (
//         <div style={{position:"absolute", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: "#282c28ff", backdropFilter: 'blur(5px)' }}>
//             <FourSquare color="#32cd32" size="large" text="" textColor="" />
//         </div>
//     )
// }
// export default Loader

import React from "react";
import { FourSquare } from "react-loading-indicators";
import styles from "./loader.module.css";
const Loader = () => {
  return (
    <div className={styles.Loaderoverlay}>
      <FourSquare color="#32cd32" size="large" text="" textColor="" />
    </div>
  );
};
export default Loader;
