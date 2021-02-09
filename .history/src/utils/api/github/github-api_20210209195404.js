// github-api.js

exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
      name
      repositories(first: 10) {
        nodes {
          ...
        }
      }
    }
  }
`