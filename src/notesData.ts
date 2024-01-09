import { v4 } from "uuid";

const getCurrentDateTime = () => {
  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  // @ts-ignore
  return currentDate.toLocaleString("ko-KR", options);
};

const notes = [
  {
    title: "Title 1",
    content: "Content 1",
    tags: [{ tag: "coding", id: v4() }],
    color: "#cce0ff",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: getCurrentDateTime(),
    createdTime: new Date().getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "Title 2",
    content: "Content 2",
    tags: [{ tag: "exercise", id: v4() }],
    color: "#ffcccc",
    priority: "high",
    isPinned: false,
    isRead: false,
    date: getCurrentDateTime(),
    createdTime: new Date().getTime(),
    editedTime: null,
    id: v4(),
  },
];

export default notes;
