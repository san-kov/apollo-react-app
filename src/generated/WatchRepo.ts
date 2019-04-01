/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SubscriptionState } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: WatchRepo
// ====================================================

export interface WatchRepo_updateSubscription_subscribable {
  __typename: "Issue" | "Repository" | "PullRequest" | "Commit" | "Team";
  id: string;
  /**
   * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
   */
  viewerSubscription: SubscriptionState | null;
}

export interface WatchRepo_updateSubscription {
  __typename: "UpdateSubscriptionPayload";
  /**
   * The input subscribable entity.
   */
  subscribable: WatchRepo_updateSubscription_subscribable | null;
}

export interface WatchRepo {
  /**
   * Updates the state for subscribable subjects.
   */
  updateSubscription: WatchRepo_updateSubscription | null;
}

export interface WatchRepoVariables {
  id: string;
  viewerSubscription: SubscriptionState;
}
