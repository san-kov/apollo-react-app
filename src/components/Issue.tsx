import React from 'react'
import { RouteProps } from 'react-router'
import { Query } from 'react-apollo'
import {
  RepositoryIssuesData,
  RepositoryIssuesDataVariables
} from '../generated/RepositoryIssuesData'
import { GET_ISSUES_OF_REPO } from '../queries'
import Error from './Error'
import { BarLoader } from 'react-spinners'
import { IssueState } from '../generated/globalTypes'

interface ReposInfo extends RouteProps {
  match: {
    params: {
      reposName: string
      reposUser: string
    }
  }
}

class IssuesQuery extends Query<
  RepositoryIssuesData,
  RepositoryIssuesDataVariables
> {}

const Issue: React.SFC<ReposInfo> = ({
  match: {
    params: { reposName, reposUser }
  }
}) => {
  return (
    <IssuesQuery
      query={GET_ISSUES_OF_REPO}
      variables={{ reposName, reposUser }}
    >
      {({ data, error, loading }) => {
        console.log(data)
        if (error) return <Error error={error} />

        if (loading) return <BarLoader color="teal" />

        if (
          !data ||
          !data.repository ||
          !data.repository.issues ||
          !data.repository.issues.edges ||
          data.repository.issues.edges.length === 0 ||
          data.repository.issues.edges.length === 0
        )
          return <div className="issue">No issues yet</div>

        return (
          <div className="issues">
            <h1>{reposName} issues</h1>{' '}
            {data.repository.issues.edges.map(
              issue =>
                issue &&
                issue.node && (
                  <div key={issue.node.id} className="issue">
                    <h1>{issue.node.title} </h1>
                    <h5>
                      <span
                        className={`
                      badge
                      ${
                        issue.node.state === IssueState.OPEN ? 'open' : 'closed'
                      }
                      `}
                      >
                        {issue.node.state}
                      </span>
                    </h5>
                    <div
                      className="issue-content"
                      dangerouslySetInnerHTML={{
                        __html: issue.node.bodyHTML
                      }}
                    />
                  </div>
                )
            )}{' '}
          </div>
        )
      }}
    </IssuesQuery>
  )
}

export default Issue
