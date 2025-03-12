import contextCursor from "../libs/context-cursor/contextCursor";

const mq = window.matchMedia("(min-width: 640px)");
if (mq.matches) {
  contextCursor({
    radius: 25,
  });
}
