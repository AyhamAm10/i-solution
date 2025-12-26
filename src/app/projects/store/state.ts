import { projects } from "@/app/data/courses";

type Params = {
  selectedProject: typeof projects[0] | null;
  setSelectedProject: (project: typeof projects[0] | null) => void;
};

const store = (): Params => ({
  selectedProject: null,
  setSelectedProject: () => {},
});

export { store as stateStore };
export type { Params as stateParams };

