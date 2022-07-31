import clsx from "clsx";
import React from "react";
import styles from "./box.module.css";

const Box = ({
  totalBox,
  setTotalBox,
  keyboardControl,
  focusOnBoxId,
  getFocusId,
}) => {
  const getIndex = (id) => totalBox.findIndex((item) => id === item.id);
  const focusBoxIndex = getIndex(focusOnBoxId);

  const keyDownHandler = (event, id) => {
    switch (event.key) {
      case "w":
        return setTotalBox((previous) => {
          previous[focusBoxIndex].position.bottom =
            parseInt(previous[focusBoxIndex].position.bottom, 10) < 84
              ? parseInt(previous[focusBoxIndex].position.bottom, 10) + 1 + "%"
              : previous[focusBoxIndex].position.bottom;
          return [...previous];
        });
      case "d":
        return setTotalBox((previous) => {
          previous[focusBoxIndex].position.left =
            parseInt(previous[focusBoxIndex].position.left, 10) < 84
              ? parseInt(previous[focusBoxIndex].position.left, 10) + 1 + "%"
              : previous[focusBoxIndex].position.left;
          return [...previous];
        });
      case "s":
        return setTotalBox((previous) => {
          previous[focusBoxIndex].position.bottom =
            parseInt(previous[focusBoxIndex].position.bottom, 10) > 0
              ? parseInt(previous[focusBoxIndex].position.bottom, 10) - 1 + "%"
              : previous[focusBoxIndex].position.bottom;
          return [...previous];
        });
      case "a":
        return setTotalBox((previous) => {
          previous[focusBoxIndex].position.left =
            parseInt(previous[focusBoxIndex].position.left, 10) > 0
              ? parseInt(previous[focusBoxIndex].position.left, 10) - 1 + "%"
              : previous[focusBoxIndex].position.left;
          return [...previous];
        });
      case "Delete":
        return setTotalBox((previous) => {
          return previous.filter((data) => id !== data.id);
        });

      default:
    }
  };

  return totalBox.map((item) => {
    return (
      <div
        key={item.id}
        className={clsx(styles.box, {
          [styles.hasFocus]: focusOnBoxId === item.id,
        })}
        onClick={(event) => {
          event.stopPropagation();
          getFocusId(item.id);
        }}
        onKeyDown={
          keyboardControl ? (event) => keyDownHandler(event, item.id) : null
        }
        tabIndex="0"
        style={{
          left: item.position.left,
          bottom: item.position.bottom,
          zIndex: item.id,
        }}
      >
        <h5>BOX {item.id}</h5>
      </div>
    );
  });
};

export default Box;
