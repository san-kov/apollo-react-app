/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { IssueState } from "./globalTypes";

// ====================================================
// GraphQL query operation: RepositoryIssuesData
// ====================================================

export interface RepositoryIssuesData_repository_issues_edges_node {
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

export interface RepositoryIssuesData_repository_issues_edges {
  __typename: "IssueEdge";
  /**
   * The item at the end of the edge.
   */
  node: RepositoryIssuesData_repository_issues_edges_node | null;
}

export interface RepositoryIssuesData_repository_issues {
  __typename: "IssueConnection";
  /**
   * A list of edges.
   */
  edges: (RepositoryIssuesData_repository_issues_edges | null)[] | null;
}

export interface RepositoryIssuesData_repository {
  __typename: "Repository";
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: RepositoryIssuesData_repository_issues;
}

export interface RepositoryIssuesData {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: RepositoryIssuesData_repository | null;
}

export interface RepositoryIssuesDataVariables {
  reposName: string;
  reposUser: string;
}
