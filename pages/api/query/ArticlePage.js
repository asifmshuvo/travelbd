import gql from 'graphql-tag'

export const GET_SINGLE_POST_CONTENT = gql`
query getPostContent($id: ID!){
    post(id: $id) {
    content
    date
    title
    author {
      node {
        avatar {
          url
        }
        name
      }
    }
    categories {
      nodes {
        name
      }
    }
    featuredImage {
      node {
        sourceUrl(size: MEDIUM_LARGE)
      }
    }
  }
}
`