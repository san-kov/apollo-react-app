import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

interface INavProps {
  organizationName: string
  onOrganizationChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const Nav: React.SFC<INavProps & RouteComponentProps> = ({
  location,
  organizationName,
  onOrganizationChange
}) => {
  const pathname = location.pathname
  return (
    <div className="nav">
      <div>
        <Link
          to="/"
          style={
            pathname === '/' ? { borderBottom: '2px solid white' } : undefined
          }
        >
          Home
        </Link>
        <Link
          to="/organization"
          style={
            pathname === '/organization'
              ? { borderBottom: '2px solid white' }
              : undefined
          }
        >
          Organization
        </Link>
      </div>
      {pathname === '/organization' && (
        <div>
          <input
            type="text"
            onChange={onOrganizationChange}
            value={organizationName}
          />
        </div>
      )}
    </div>
  )
}

export default withRouter(Nav)
