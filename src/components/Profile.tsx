import React from 'react'

import ReposList from './ReposList'
import { Query } from 'react-apollo'
import { GET_CURRENT_USER } from '../queries'
import Error from './Error'
import { BarLoader } from 'react-spinners'
import {
  UserRepositoriesData,
  UserRepositoriesDataVariables
} from '../generated/UserRepositoriesData'

class GetUserQuery extends Query<
  UserRepositoriesData,
  UserRepositoriesDataVariables
> {}

const Profile: React.SFC<{}> = () => (
  <GetUserQuery query={GET_CURRENT_USER} notifyOnNetworkStatusChange>
    {({ data, error, loading, fetchMore }) => {
      if (error) return <Error error={error} />
      if (!data) return null

      const { viewer } = data

      console.log(data)
      if (loading && !viewer)
        return (
          <div>
            <BarLoader color="teal" />
          </div>
        )

      console.log(data)
      if (data.viewer.repositories)
        return (
          <div className="profile">
            <h1>{viewer.login} repositories</h1>
            <div className="loader">
              {loading && viewer && <BarLoader color="teal" width={500} />}
            </div>
            <ReposList
              user={'san-kov'}
              repositories={data.viewer.repositories}
              fetchMore={fetchMore}
              entry="viewer"
            />
          </div>
        )
    }}
  </GetUserQuery>
)

export default Profile
