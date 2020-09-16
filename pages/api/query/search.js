import gql from 'graphql-tag'

export const GET_SEARCHED_ARTICLES = gql`
query getSearchedData($slug: ID!){
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