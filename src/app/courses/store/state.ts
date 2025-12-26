type Params = {
  activeTrack: string;
  setActiveTrack: (value: string) => void;
  activeLevel: string;
  setActiveLevel: (value: string) => void;
  handleTrackFilter: (trackId: string) => void;
  handleLevelFilter: (level: string) => void;
};

const store = (): Params => ({
  activeTrack: "all",
  setActiveTrack: () => {},
  activeLevel: "all",
  setActiveLevel: () => {},
  handleTrackFilter: () => {},
  handleLevelFilter: () => {},
});

export { store as stateStore };
export type { Params as stateParams };

