import {Subject} from "../types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An introductory course covering the fundamentals of programming, algorithms, and computational thinking.",
    createdAt: "2026-02-01T00:00:00Z",
  },
  {
    id: 2,
    code: "BUS205",
    name: "Principles of Management",
    department: "Business Administration",
    description:
      "This course explores core management principles including planning, organization, leadership, and control in modern organizations.",
    createdAt: "2026-02-02T00:00:00Z"
  },
  {
    id: 3,
    code: "ENG310",
    name: "Technical Communication",
    department: "Engineering",
    description:
      "Focuses on effective written and oral communication skills for engineers, including reports, presentations, and documentation.",
    createdAt: "2026-02-03T00:00:00Z",
  },
];