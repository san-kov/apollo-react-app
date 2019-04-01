import React from 'react'
import { Mutation, ApolloConsumer } from 'react-apollo'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import {
  STAR_REPO,
  UNSTAR_REPO,
  WATCH_REPO,
  GET_ISSUES_OF_REPO
} from '../queries'
import { Repository } from '../generated/Repository'
import { SubscriptionState } from '../generated/globalTypes'
import { WatchRepo } from '../generated/WatchRepo'
import { StarRepo } from '../generated/StarRepo'
import { UnstarRepo } from '../generated/UnstarRepo'
import ApolloClient from 'apollo-client'
import {
  RepositoryIssuesData,
  RepositoryIssuesDataVariables
} from '../generated/RepositoryIssuesData'

const isWatch = (subscription: SubscriptionState | null) => {
  return subscription === SubscriptionState.SUBSCRIBED
}

interface IReposItemProps {
  repo: Repository
  user: string
}

class WatchRepoMutation extends Mutation<WatchRepo> {}
class StarMutation extends Mutation<StarRepo> {}
class UnstarMutation extends Mutation<UnstarRepo> {}

const prefetchQuery = (
  client: ApolloClient<any>,
  reposName: string,
  reposUser: string
) => {
  client.query<RepositoryIssuesData, RepositoryIssuesDataVariables>({
    query: GET_ISSUES_OF_REPO,
    variables: {
      reposName,
      reposUser
    }
  })
}

const ReposIstem: React.SFC<IReposItemProps> = ({
  repo: {
    id,
    name,
    stargazers: { totalCount },
    primaryLanguage,
    viewerHasStarred,
    viewerSubscription
  },
  user
}) => {
  return (
    <div className="repo-item">
      <div className="repo-item__title">
        <h4 className="title">
          <div>{name}</div>
          <div className="icon">
            <FaStar color={`${viewerHasStarred} ? "black" : "yellow"`} />
          </div>
          <div className="star">{totalCount}</div>
        </h4>
      </div>
      <div>{primaryLanguage ? primaryLanguage.name : 'not specified'}</div>
      <div className={`${isWatch(viewerSubscription) ? 'sub' : 'unsub'}`}>
        {viewerSubscription}
      </div>
      <div>
        {!viewerHasStarred ? (
          <StarMutation
            mutation={STAR_REPO}
            variables={{ id }}
            optimisticResponse={{
              addStar: {
                __typename: 'AddStarPayload',
                starrable: {
                  id,
                  __typename: 'Repository',
                  viewerHasStarred: true,
                  stargazers: {
                    __typename: 'StargazerConnection',
                    totalCount: totalCount + 1
                  }
                }
              }
            }}
          >
            {mutate => {
              return (
                <div>
                  <button className="btn" onClick={e => mutate()}>
                    {viewerHasStarred ? 'Remove' : 'Add'} Star
                  </button>
                </div>
              )
            }}
          </StarMutation>
        ) : (
          <UnstarMutation
            mutation={UNSTAR_REPO}
            variables={{ id }}
            optimisticResponse={{
              removeStar: {
                __typename: 'RemoveStarPayload',
                starrable: {
                  id,
                  __typename: 'Repository',
                  viewerHasStarred: false,
                  stargazers: {
                    __typename: 'StargazerConnection',
                    totalCount: totalCount - 1
                  }
                }
              }
            }}
          >
            {mutate => {
              return (
                <div>
                  <button className="btn" onClick={e => mutate()}>
                    {viewerHasStarred ? 'Remove' : 'Add'} Star
                  </button>
                </div>
              )
            }}
          </UnstarMutation>
        )}
      </div>
      <div>
        <WatchRepoMutation
          mutation={WATCH_REPO}
          variables={{
            id,
            viewerSubscription: isWatch(viewerSubscription)
              ? 'UNSUBSCRIBED'
              : 'SUBSCRIBED'
          }}
          optimisticResponse={{
            updateSubscription: {
              __typename: 'UpdateSubscriptionPayload',
              subscribable: {
                __typename: 'Repository',
                id,
                viewerSubscription: isWatch(viewerSubscription)
                  ? SubscriptionState.UNSUBSCRIBED
                  : SubscriptionState.SUBSCRIBED
              }
            }
          }}
        >
          {mutate => {
            return (
              <div>
                <button className="btn" onClick={e => mutate()}>
                  {isWatch(viewerSubscription) ? 'un' : ''}subscribe
                </button>
              </div>
            )
          }}
        </WatchRepoMutation>
      </div>
      <ApolloConsumer>
        {client => (
          <div>
            <Link
              className="btn"
              to={`/issue/${user}/${name}`}
              onMouseOver={() => prefetchQuery(client, name, user)}
            >
              Issues
            </Link>
          </div>
        )}
      </ApolloConsumer>
    </div>
  )
}

export default ReposIstem
