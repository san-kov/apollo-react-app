/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnstarRepo
// ====================================================

export interface UnstarRepo_removeStar_starrable_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface UnstarRepo_removeStar_starrable {
  __typename: "Repository" | "Topic" | "Gist";
  id: string;
  /**
   * Returns a boolean indicating whether the viewing user has starred this starrable.
   */
  viewerHasStarred: boolean;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: UnstarRepo_removeStar_starrable_stargazers;
}

export interface UnstarRepo_removeStar {
  __typename: "RemoveStarPayload";
  /**
   * The starrable.
   */
  starrable: UnstarRepo_removeStar_starrable | null;
}

export interface UnstarRepo {
  /**
   * Removes a star from a Starrable.
   */
  removeStar: UnstarRepo_removeStar | null;
}

export interface UnstarRepoVariables {
  id: string;
}
