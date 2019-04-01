module.exports = {
  client: {
    includes: [__dirname + '/*.tsx'],
    service: {
      name: 'apollo-ts',
      url: 'https://api.github.com/graphql'
    }
  }
}
