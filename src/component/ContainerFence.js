import React, { useState } from "react";
import Box from "./Box";
import styles from "./containerFence.module.css";

const ContainerFence = () => {
  const [totalBox, setTotalBox] = useState([]);
  const [keyboardControl, setKeyboardControl] = useState(true);
  const [focusOnBoxId, setFocusOnBoxId] = useState(null);
  const [boxAppend, setBoxAppend] = useState({
    id: 1,
    position: {
      bottom: "0%",
      left: "0%",
    },
  });

  const getFocusId = (id) => setFocusOnBoxId(id);

  return (
    <>
      <div className={styles.container} onClick={() => setFocusOnBoxId(null)}>
        <Box
          totalBox={totalBox}
          setTotalBox={setTotalBox}
          keyboardControl={keyboardControl}
          focusOnBoxId={focusOnBoxId}
          getFocusId={getFocusId}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.button}
          onClick={() => {
            setTotalBox((previous) => [...previous, boxAppend]);
            setBoxAppend((previous) => ({
              id: previous.id + 1,
              position: {
                bottom: "0%",
                left: "0%",
              },
            }));
          }}
        >
          Add Box
        </button>
        <button
          className={styles.button}
          onClick={() => setKeyboardControl((previous) => !previous)}
        >
          Keyboard Control: {keyboardControl ? "ON" : "OFF"}
        </button>
      </div>
    </>
  );
};

export default ContainerFence;
