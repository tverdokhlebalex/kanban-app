const LIST_TYPES = {
    BACKLOG: "backlog",
    READY: "ready",
    IN_PROGRESS: "inProgress",
    FINISHED: "finished",
  };
  
  const LIST_TITLE = {
    [LIST_TYPES.BACKLOG]: "Backlog",
    [LIST_TYPES.READY]: "Ready",
    [LIST_TYPES.IN_PROGRESS]: "In progress",
    [LIST_TYPES.FINISHED]: "Finished",
  };
  const LIST_COLORS = {
    [LIST_TYPES.BACKLOG]: "#f4dfca",
    [LIST_TYPES.READY]: "#f4caca",
    [LIST_TYPES.IN_PROGRESS]: "#cae8f4",
    [LIST_TYPES.FINISHED]: "#cbf4ca",
  };
  const LIST_ICONS = {
    [LIST_TYPES.BACKLOG]: "&#9888;",
    [LIST_TYPES.READY]: "&#128075;",
    [LIST_TYPES.IN_PROGRESS]: "&#9757;",
    [LIST_TYPES.FINISHED]: "&#9873;",
  };
  
  const LIST_AUTHOR_INFO = {
    firstname: "Alexander",
    secondname: "Tverdokhleb",
    year: 2024,
    link_github: "https://github.com/tverdokhlebalex",
  };
  
  export { LIST_TYPES, LIST_TITLE, LIST_AUTHOR_INFO,LIST_COLORS,LIST_ICONS };