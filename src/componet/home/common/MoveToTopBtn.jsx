import React from "react";
import styles from "../../../styles/common/moveToTopBtn.module.css";
import useScroll from "../../../customHook/useScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function MoveToTopBtn() {
  const { scroll, moveToTop } = useScroll();
  return (
    <div>
      {scroll > 350 && (
        <button className={styles.moveBtn} onClick={moveToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
}

export default MoveToTopBtn;
