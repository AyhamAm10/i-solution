type Params = {
  use3D: boolean;
  setUse3D: (value: boolean) => void;
};

const store = (): Params => ({
  use3D: false,
  setUse3D: () => {},
});

export { store as stateStore };
export type { Params as stateParams };

