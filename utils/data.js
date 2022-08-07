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
    title: "lime",
    color: "lime",
  },
  {
    title: "emerald",
    color: "emerald",
  },
  {
    title: "cyan",
    color: "cyan",
  },
  {
    title: "blue",
    color: "blue",
  },
  {
    title: "purple",
    color: "purple",
  },
  {
    title: "other",
    color: "pink",
  },
];

export const categoryColors = [
  {
    title: "orange",
    color: "rgb(249, 115, 22)",
    backgroundColor: "rgb(249, 115, 22, 0.1)",
  },
  {
    title: "yellow",
    color: "rgb(234, 179, 8)",
    backgroundColor: "rgb(234, 179, 8, 0.1)",
  },
  {
    title: "lime",
    color: "rgb(132, 204, 22)",
    backgroundColor: "rgb(132, 204, 22, 0.1)",
  },
  {
    title: "emerald",
    color: "rgb(16, 185, 129)",
    backgroundColor: "rgb(16, 185, 129, 0.1)",
  },
  {
    title: "cyan",
    color: "rgb(6, 182, 212)",
    backgroundColor: "rgb(6, 182, 212, 0.1)",
  },
  {
    title: "blue",
    color: "rgb(59, 130, 246)",
    backgroundColor: "rgb(59, 130, 246, 0.1)",
  },
  {
    title: "purple",
    color: "rgb(168, 85, 247)",
    backgroundColor: "rgb(168, 85, 247, 0.1)",
  },
  {
    title: "pink",
    color: "rgb(236, 72, 153)",
    backgroundColor: "rgb(236, 72, 153, 0.1)",
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
    category: "other",
    dueDate: "9/1",
    duration: "45",
    urgent: false,
    status: statusTypes.COMPLETED,
  },
  {
    title: "Test3",
    description: "Another test",
    category: "other",
    dueDate: "9/1",
    duration: "45",
    urgent: false,
    status: statusTypes.STALLED,
  },
  {
    title: "Test4",
    description: "Another test",
    category: "other",
    dueDate: "9/1",
    duration: "45",
    urgent: false,
    status: statusTypes.COMPLETED,
  },
];
