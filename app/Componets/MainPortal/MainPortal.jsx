// import React, { useEffect } from "react";
// import { createPortal } from "react-dom";
// import styles from "./MainPortal.module.css";
// const OverLay = ({ children, handleCloseModal }) => {
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);
//   return (
//     <div onClick={handleCloseModal} class={styles.overLay}>
//       {children}
//     </div>
//   );
// };
// const Modal = ({ children }) => {
//   return (
//     <>
//       <div className={styles.modal}>
//         {children}
//       </div>
//     </>
//   );
// };
// const MainPortal = ({ children, handleCloseModal }) => {
//   return (
//     <>
//       {createPortal(
//         <OverLay handleCloseModal={handleCloseModal} />,
//         document.getElementById("modal")
//       )}
//       {createPortal(
//         <Modal handleCloseModal={handleCloseModal}>{children}</Modal>,
//         document.getElementById("modal")
//       )}
//     </>
//   );
// };
// export default MainPortal;

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./MainPortal.module.css";

const MainPortal = ({ children, handleCloseModal }) => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  const handleClickOverlay = (e) => {
    // Only close if clicked directly on the overlay, not modal content
    if (e.target === e.currentTarget) {
      handleCloseModal(e);
    }
  };

  return createPortal(
    <div className={styles.overLay} onClick={handleClickOverlay}>
      <div className="button cut-btn"></div>
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default MainPortal;
