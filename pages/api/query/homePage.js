import gql from 'graphql-tag'

export const GET_RECENT_POST = gql`
query getRecentPosts($after: String, $before: String, $first: Int){
    posts(after: $after, before: $before, first: $first) {
    pageInfo {
      endCursor
    }
    nodes {
      slug
      title
      id
      date
      featuredImage {
        node {
          sourceUrl(size: MEDIUM)
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
}
`