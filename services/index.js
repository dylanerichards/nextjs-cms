import { request, gql } from 'graphql-request'

const graqpqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            slug
            title
            excerpt
            createdAt
            featuredImage {
              fileName
              url
            }
            author {
              bio
              name
              id
              photo {
                fileName
                url
              }
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graqpqlAPI, query)
  console.log('result', result)

  return result.postsConnection.edges
}
