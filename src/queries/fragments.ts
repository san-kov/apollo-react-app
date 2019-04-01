import gql from 'graphql-tag'

export const REPOSITORY_FRAGMENT = gql`
  fragment Repository on Repository {
    id
    name
    url
    descriptionHTML
    primaryLanguage {
      name
    }
    owner {
      login
      url
    }
    stargazers {
      totalCount
    }
    viewerHasStarred
    watchers {
      totalCount
    }
    viewerSubscription
  }
`

export const ISSUE_FRAGMENT = gql`
  fragment Issue on Issue {
    id
    title
    number
    state
    bodyHTML
  }
`
