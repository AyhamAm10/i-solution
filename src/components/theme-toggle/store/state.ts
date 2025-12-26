type Params = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  mounted: boolean;
  setMounted: (value: boolean) => void;
};

const store = (): Params => ({
  theme: undefined,
  setTheme: () => {},
  mounted: false,
  setMounted: () => {},
});

export { store as stateStore };
export type { Params as stateParams };

