/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SubscriptionState } from "./globalTypes";

// ====================================================
// GraphQL query operation: OrganizationRepositoriesData
// ====================================================

export interface OrganizationRepositoriesData_organization_repositories_edges_node_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
}

export interface OrganizationRepositoriesData_organization_repositories_edges_node_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The HTTP URL for the owner.
   */
  url: any;
}

export interface OrganizationRepositoriesData_organization_repositories_edges_node_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OrganizationRepositoriesData_organization_repositories_edges_node_watchers {
  __typename: "UserConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OrganizationRepositoriesData_organization_repositories_edges_node {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: OrganizationRepositoriesData_organization_repositories_edges_node_primaryLanguage | null;
  /**
   * The User owner of the repository.
   */
  owner: OrganizationRepositoriesData_organization_repositories_edges_node_owner;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: OrganizationRepositoriesData_organization_repositories_edges_node_stargazers;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users watching the repository.
   */
  watchers: OrganizationRepositoriesData_organization_repositories_edges_node_watchers;
  /**
   * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
   */
  viewerSubscription: SubscriptionState | null;
}

export interface OrganizationRepositoriesData_organization_repositories_edges {
  __typename: "RepositoryEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: OrganizationRepositoriesData_organization_repositories_edges_node | null;
}

export interface OrganizationRepositoriesData_organization_repositories_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface OrganizationRepositoriesData_organization_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of edges.
   */
  edges: (OrganizationRepositoriesData_organization_repositories_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: OrganizationRepositoriesData_organization_repositories_pageInfo;
}

export interface OrganizationRepositoriesData_organization {
  __typename: "Organization";
  /**
   * The organization's login name.
   */
  login: string;
  /**
   * A list of repositories that the user owns.
   */
  repositories: OrganizationRepositoriesData_organization_repositories;
}

export interface OrganizationRepositoriesData {
  /**
   * Lookup a organization by login.
   */
  organization: OrganizationRepositoriesData_organization | null;
}

export interface OrganizationRepositoriesDataVariables {
  organization: string;
  cursor?: string | null;
}
