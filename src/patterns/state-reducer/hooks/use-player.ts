import React from "react";

interface State {
  isPlaying: boolean;
}

export type Action =
  | { type: "TOOGLE_PLAY" }
  | { type: "PLAY" }
  | { type: "PAUSE" };

export const playingReducer = (state: State, action: Action) => {
  if (action.type === "TOOGLE_PLAY") {
    return { isPlaying: !state.isPlaying };
  }

  if (action.type === "PLAY") {
    return { isPlaying: true };
  }

  if (action.type === "PAUSE") {
    return { isPlaying: false };
  }

  return state;
};

export const usePlayer = ({ reducer = playingReducer } = {}) => {
  const [{ isPlaying }, dispatch] = React.useReducer(reducer, {
    isPlaying: false,
  });

  const tooglePlay = () => dispatch({ type: "TOOGLE_PLAY" });
  const play = () => dispatch({ type: "PLAY" });
  const pause = () => dispatch({ type: "PAUSE" });

  return {
    tooglePlay,
    isPlaying,
    play,
    pause,
  };
};
