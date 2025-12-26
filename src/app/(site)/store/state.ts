type Params = {
    hero3dProgress: number;
    hero3dLoading: boolean;
    hero3dDone: boolean;
  };
  
  const store = (): Params => ({
    hero3dProgress: 0,
    hero3dLoading: false,
    hero3dDone: false,
  });
  
  export { store as stateStore };
  export type { Params as stateParams };
  