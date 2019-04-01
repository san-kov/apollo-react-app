/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { IssueState } from "./globalTypes";

// ====================================================
// GraphQL fragment: Issue
// ====================================================

export interface Issue {
  __typename: "Issue";
  id: string;
  /**
   * Identifies the issue title.
   */
  title: string;
  /**
   * Identifies the issue number.
   */
  number: number;
  /**
   * Identifies the state of the issue.
   */
  state: IssueState;
  /**
   * Identifies the body of the issue rendered to HTML.
   */
  bodyHTML: any;
}
