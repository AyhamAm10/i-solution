type Params = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  pathname: string;
  setPathname: (value: string) => void;
};

const store = (): Params => ({
  isOpen: false,
  setIsOpen: () => {},
  pathname: "/",
  setPathname: () => {},
});

export { store as stateStore };
export type { Params as stateParams };

