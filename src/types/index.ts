/**
 * Interface representing a portfolio project
 * @interface Project
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;

  /** Project name/title */
  title: string;

  /** URL to the project's main showcase image */
  imageUrl: string;

  /** Brief project description for cards and previews */
  description: string;

  /** Full project details and background */
  details: string;

  /** Collection of additional project images */
  extraImages: string[];

  /** Project objectives or client requirements */
  goal?: string;

  /** Designer's role and responsibilities */
  role?: string;

  /** Software and technologies used */
  tools?: string[];

  /** Project challenges and their solutions */
  challenges?: string;
}

/**
 * Interface representing a design process step
 * @interface ProcessItem
 */
export interface ProcessItem {
  /** Unique identifier for the process step */
  id: number;

  /** Name of the process step */
  title: string;

  /** Detailed explanation of the step */
  description: string;

  /** URL to step's illustration image */
  imageUrl: string;
}