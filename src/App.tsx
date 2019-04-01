import React from 'react'
import Profile from './components/Profile'
import './styles/base/styles.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Organization from './components/Organization'
import Issue from './components/Issue'

interface IAppState {
  organization: string
}
class App extends React.Component<{}, IAppState> {
  state = {
    organization: 'facebook'
  }
  onOrganizationChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target = e.target as HTMLInputElement
    this.setState({ organization: target.value })
  }
  render() {
    const { organization } = this.state
    return (
      <BrowserRouter>
        <div>
          <Nav
            organizationName={organization}
            onOrganizationChange={this.onOrganizationChange}
          />
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route
              exact
              path="/organization"
              component={() => <Organization organization={organization} />}
            />
            <Route
              exact
              path="/issue/:reposUser/:reposName"
              component={Issue}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
