import React from 'react'
import { Query } from 'react-apollo'
import { GET_ORGANIZATION_REPOS } from '../queries'
import { BarLoader } from 'react-spinners'
import ReposList from './ReposList'
import {
  OrganizationRepositoriesData,
  OrganizationRepositoriesDataVariables
} from '../generated/OrganizationRepositoriesData'

interface IOrganizationProps {
  organization: string
}

class OrganizationQuery extends Query<
  OrganizationRepositoriesData,
  OrganizationRepositoriesDataVariables
> {}

const Organization: React.SFC<IOrganizationProps> = ({
  organization = 'facebook'
}) => {
  return (
    <OrganizationQuery
      query={GET_ORGANIZATION_REPOS}
      variables={{
        organization: organization ? organization : 'reduxjs'
      }}
      skip={organization === undefined}
      notifyOnNetworkStatusChange
    >
      {({ data, loading, error, fetchMore }) => {
        if (error) return error.graphQLErrors.map(e => e.message).concat('\n')

        if (!data || !data.organization) return null

        console.log(data.organization.repositories.pageInfo.endCursor)
        if (loading && !organization) {
          return <BarLoader color="teal" />
        }

        if (data.organization.repositories)
          return (
            <div className="profile">
              <h1>{data.organization.login} repositories</h1>
              <div className="loader">
                {loading && organization && (
                  <BarLoader color="teal" width={500} />
                )}
              </div>
              <ReposList
                user={organization}
                repositories={data.organization.repositories}
                fetchMore={fetchMore}
                entry="organization"
              />
            </div>
          )
      }}
    </OrganizationQuery>
  )
}

export default Organization
