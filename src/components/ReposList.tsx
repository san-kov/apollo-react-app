import React from 'react'
import produce from 'immer'
import ReposIstem from './ReposIstem'
import { UserRepositoriesData_viewer_repositories } from '../generated/UserRepositoriesData'
import { OrganizationRepositoriesData_organization_repositories } from '../generated/OrganizationRepositoriesData'

const getUpdateQuery = (entry: string) => (
  prevRes: any,
  { fetchMoreResult }: any
) => {
  console.log(prevRes, fetchMoreResult)

  if (!fetchMoreResult) return prevRes

  return produce(fetchMoreResult, draft => {
    draft[entry].repositories.edges = []
    draft[entry].repositories.edges.push(
      ...prevRes[entry].repositories.edges,
      ...fetchMoreResult[entry].repositories.edges
    )
  })
}

interface IReposListProps {
  repositories:
    | UserRepositoriesData_viewer_repositories
    | OrganizationRepositoriesData_organization_repositories
  entry: string
  fetchMore: any
  user: string
}

const ReposList: React.SFC<IReposListProps> = ({
  repositories,
  fetchMore,
  entry,
  user
}) => {
  if (!repositories.edges) return null
  return (
    <div className="repos-list">
      {repositories.edges.map((repo: any) => (
        <ReposIstem user={user} key={repo.node.id} repo={repo.node} />
      ))}
      <div>
        {repositories.pageInfo.hasNextPage && (
          <button
            className="btn"
            onClick={() =>
              fetchMore({
                variables: { cursor: repositories.pageInfo.endCursor },
                updateQuery: getUpdateQuery(entry)
              })
            }
          >
            More
          </button>
        )}
      </div>
    </div>
  )
}

export default ReposList
