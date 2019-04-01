import gql from 'graphql-tag'
import { REPOSITORY_FRAGMENT, ISSUE_FRAGMENT } from './fragments'

export const GET_CURRENT_USER = gql`
  query UserRepositoriesData($cursor: String) {
    viewer {
      repositories(
        first: 5
        orderBy: { direction: DESC, field: STARGAZERS }
        after: $cursor
      ) {
        edges {
          cursor
          node {
            ...Repository
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      login
      name
    }
  }

  ${REPOSITORY_FRAGMENT}
`

export const STAR_REPO = gql`
  mutation StarRepo($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
        stargazers {
          totalCount
        }
      }
    }
  }
`

export const UNSTAR_REPO = gql`
  mutation UnstarRepo($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
        stargazers {
          totalCount
        }
      }
    }
  }
`

export const WATCH_REPO = gql`
  mutation WatchRepo($id: ID!, $viewerSubscription: SubscriptionState!) {
    updateSubscription(
      input: { subscribableId: $id, state: $viewerSubscription }
    ) {
      subscribable {
        id
        viewerSubscription
      }
    }
  }
`

export const GET_ORGANIZATION_REPOS = gql`
  query OrganizationRepositoriesData($organization: String!, $cursor: String) {
    organization(login: $organization) {
      login
      repositories(first: 5, after: $cursor) {
        edges {
          cursor
          node {
            ...Repository
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`

export const GET_ISSUES_OF_REPO = gql`
  query RepositoryIssuesData($reposName: String!, $reposUser: String!) {
    repository(name: $reposName, owner: $reposUser) {
      issues(first: 5) {
        edges {
          node {
            ...Issue
          }
        }
      }
    }
  }

  ${ISSUE_FRAGMENT}
`
