import { LowercasePartialKeys } from "./utility";

export interface ProjectDTO {
  Name: string;
  CompanyName: string;
  Description: string;
  Number: number;
  PublishDate: Date;
  DueDate: Date;
  Categories: string;
}

export type Project = LowercasePartialKeys<ProjectDTO>;

