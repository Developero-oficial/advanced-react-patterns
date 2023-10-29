import { usePlayer, Action, playingReducer } from "../hooks/use-player";

import { Button } from "@/styles/form.styles";
import { Typography } from "@/components/typography";

const isAdmin = false;

export const Player = () => {
  const { tooglePlay, play, pause, isPlaying } = usePlayer({
    reducer: (state, action: Action) => {
      const stateUpdated = playingReducer(state, action);

      if (action.type === "PLAY" && !isAdmin) {
        return {
          isPlaying: false,
        };
      }

      return stateUpdated;
    },
  });

  return (
    <>
      <Typography variant="header">Video Player</Typography>

      <Typography>
        Current status: <b>{isPlaying ? "playing" : "paused"}</b>
      </Typography>
      <Button onClick={play}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={tooglePlay}>Toogle</Button>
    </>
  );
};
