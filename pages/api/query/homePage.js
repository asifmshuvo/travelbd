import gql from 'graphql-tag'

export const GET_RECENT_POST = gql`
query getRecentPosts($after: String, $before: String, $first: Int, $category_slug: String, $categoryNotIn: [ID], $search_string: String, $tag: String ){
    posts(after: $after, before: $before, first: $first, where: {status: PUBLISH, categoryName: $category_slug, categoryNotIn: $categoryNotIn, search: $search_string, tag: $tag}) {
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
          slug
        }
      }
    }
  }
}
`