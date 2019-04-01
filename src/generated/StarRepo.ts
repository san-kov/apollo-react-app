/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: StarRepo
// ====================================================

export interface StarRepo_addStar_starrable_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface StarRepo_addStar_starrable {
  __typename: "Repository" | "Topic" | "Gist";
  id: string;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: StarRepo_addStar_starrable_stargazers;
}

export interface StarRepo_addStar {
  __typename: "AddStarPayload";
  /**
   * The starrable.
   */
  starrable: StarRepo_addStar_starrable | null;
}

export interface StarRepo {
  /**
   * Adds a star to a Starrable.
   */
  addStar: StarRepo_addStar | null;
}

export interface StarRepoVariables {
  id: string;
}
