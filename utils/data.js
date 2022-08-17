export const categoryColors = [
  {
    title: "orange",
    color: "#f97516",
    backgroundColor: "#f975161A",
  },
  {
    title: "yellow",
    color: "rgb(234, 179, 8)",
    backgroundColor: "rgb(234, 179, 8, 0.1)",
  },
  {
    title: "green",
    color: "rgb(34, 197, 94)",
    backgroundColor: "rgb(34, 197, 94, 0.1)",
  },
  {
    title: "blue",
    color: "rgb(59, 130, 246)",
    backgroundColor: "rgb(59, 130, 246, 0.1)",
  },
  {
    title: "purple",
    color: "#a855f7",
    backgroundColor: "#a855f71A",
  },
];

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
    title: "green",
    color: "green",
  },
  {
    title: "blue",
    color: "blue",
  },
  {
    title: "purple",
    color: "purple",
  },
];

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
    color: "pink",
  },
  {
    title: "Test2",
    description: "Another test",
    category: "blue",
    dueDate: "9/1",
    duration: "45",
    urgent: false,
    status: statusTypes.COMPLETED,
  },
  {
    title: "Test3",
    description: "Another test",
    category: "blue",
    dueDate: "9/1",
    duration: "45",
    urgent: false,
    status: statusTypes.STALLED,
  },
  {
    title: "Test4",
    description: "Another test",
    category: "blue",
    dueDate: "9/1",
    duration: "45",
    urgent: false,
    status: statusTypes.COMPLETED,
  },
];
