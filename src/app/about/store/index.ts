import { stateStore } from "./state";
import { utilsStore } from "./utils";
import { mirrorFactory } from "@/hooks";

const { useMirror, useMirrorRegistry } = mirrorFactory({
  ...utilsStore(),
  ...stateStore(),
});

export { useMirror, useMirrorRegistry };

