import React from 'react'
import { ApolloError } from 'apollo-client'

interface IErrorProps {
  error: ApolloError
}
const Error: React.SFC<IErrorProps> = ({ error }) => {
  return <div>{error.message}</div>
}

export default Error
