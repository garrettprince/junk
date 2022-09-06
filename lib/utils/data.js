export const categoryData = [
  {
    title: "dev",
    color: "orange",
  },
  {
    title: "design",
    color: "yellow",
  },
  {
    title: "copy",
    color: "green",
  },
  {
    title: "general",
    color: "blue",
  },
  {
    title: "other",
    color: "purple",
  },
];

export const colorData = [
  {
    name: "orange",
    color: "#f97516",
    backgroundColor: "#f975161A",
  },
  {
    name: "yellow",
    color: "rgb(234, 179, 8)",
    backgroundColor: "rgb(234, 179, 8, 0.1)",
  },
  {
    name: "green",
    color: "rgb(34, 197, 94)",
    backgroundColor: "rgb(34, 197, 94, 0.1)",
  },
  {
    name: "blue",
    color: "rgb(59, 130, 246)",
    backgroundColor: "rgb(59, 130, 246, 0.1)",
  },
  {
    name: "purple",
    color: "#a855f7",
    backgroundColor: "#a855f71A",
  },
];

// export const categoryData = [
//   {
//     title: "dev",
//     color: "#f97516",
//   },
//   {
//     title: "design",
//     color: "rgb(234, 179, 8)",
//   },
//   {
//     title: "green",
//     color: "green",
//   },
//   {
//     title: "blue",
//     color: "blue",
//   },
//   {
//     title: "purple",
//     color: "purple",
//   },
// ];

export const statusTypes = {
  NOT_STARTED: "Not Started",
  IN_PROGRESS: "In Progress",
  STALLED: "Stalled",
  COMPLETED: "Completed",
};

export const columns = [
  { name: "Not Started" },
  { name: "In Progress" },
  { name: "Stalled" },
  { name: "Completed" },
];

export const mockCards = [
  {
    title: "Test",
    description: "Test description",
    category: "dev",
    dueDate: "8/11",
    duration: "30",
    urgent: false,
    status: statusTypes.IN_PROGRESS,
  },
  {
    title: "Test2",
    description: "Another test",
    category: "design",
    dueDate: "9/1",
    duration: "45",
    urgent: false,
    status: statusTypes.COMPLETED,
  },
  {
    title: "Test3",
    description: "Another test",
    category: "copy",
    dueDate: "9/1",
    duration: "45",
    urgent: false,
    status: statusTypes.STALLED,
  },
  {
    title: "Test4",
    description: "Another test",
    category: "general",
    dueDate: "9/1",
    duration: "45",
    urgent: false,
    status: statusTypes.COMPLETED,
  },
  {
    title: "Test5",
    description: "Another test",
    category: "other",
    dueDate: "9/1",
    duration: "45",
    urgent: false,
    status: statusTypes.COMPLETED,
  },
];
