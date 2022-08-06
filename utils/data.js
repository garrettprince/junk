export const categoryData = {
  dev: {
    title: "Dev",
    color: "rgb(249, 115, 22)",
    backgroundColor: "rgb(249, 115, 22, 0.1)",
  },
  design: {
    title: "Design",
    color: "rgb(234, 179, 8)",
    backgroundColor: "rgb(234, 179, 8, 0.1)",
  },
  lime: {
    title: "Lime",
    color: "rgb(132, 204, 22)",
    backgroundColor: "rgb(132, 204, 22, 0.1)",
  },
  emerald: {
    title: "Emerald",
    color: "rgb(16, 185, 129)",
    backgroundColor: "rgb(16, 185, 129, 0.1)",
  },
  cyan: {
    title: "Cyan",
    color: "rgb(6, 182, 212)",
    backgroundColor: "rgb(6, 182, 212, 0.1)",
  },
  blue: {
    title: "Blue",
    color: "rgb(59, 130, 246)",
    backgroundColor: "rgb(59, 130, 246, 0.1)",
  },
  purple: {
    title: "Purple",
    color: "rgb(168, 85, 247)",
    backgroundColor: "rgb(168, 85, 247, 0.1)",
  },
  pink: {
    title: "Pink",
    color: "rgb(236, 72, 153)",
    backgroundColor: "rgb(236, 72, 153, 0.1)",
  },
};

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
    category: "Dev",
    dueDate: "8/11",
    duration: "30",
    urgent: false,
    status: statusTypes.IN_PROGRESS,
  },
  {
    title: "Test2",
    description: "Another test",
    category: "Other",
    dueDate: "9/1",
    duration: "45",
    urgent: true,
    status: statusTypes.COMPLETED,
  },
  {
    title: "Test3",
    description: "Another test",
    category: "Other",
    dueDate: "9/1",
    duration: "45",
    urgent: true,
    status: statusTypes.STALLED,
  },
  {
    title: "Test4",
    description: "Another test",
    category: "Other",
    dueDate: "9/1",
    duration: "45",
    urgent: true,
    status: statusTypes.COMPLETED,
  },
];
