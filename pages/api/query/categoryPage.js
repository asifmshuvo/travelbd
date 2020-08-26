import gql from 'graphql-tag'

export const GET_CATEGORY_DATA = gql`
query getCategoryData($slug: ID!){
category(idType: SLUG, id: $slug) {
    name
    description
    postCategoryFields {
      tagLine
      catImage {
        sourceUrl
        altText
        caption
        title
      }
    }
  }
}
`