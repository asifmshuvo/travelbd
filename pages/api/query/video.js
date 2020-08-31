import gql from 'graphql-tag'

export const GET_RECENT_VIDEOS = gql`
query getRecentVideos($after: String, $before: String, $first: Int) {
    videos(after: $after, before: $before, first: $first) {
      pageInfo {
        endCursor
      }
      nodes {
        content
        date
        id
        title(format: RAW)
        videoInformation {
          videoUrl
          featuredImage {
            altText
            sourceUrl(size: MEDIUM)
            # author {
            #   node {
            #     avatar {
            #       url
            #     }
            #     name
            #   }
            # }
          }
        }
      }
    }
  }`

export const GET_RECENT_QVIDEOS = gql`
query getRecentVideos($after: String, $before: String, $first: Int) {
    qvideos(after: $after, before: $before, first: $first) {
      pageInfo {
        endCursor
      }
      nodes {
        content
        date
        id
        title(format: RAW)
        videoInformation {
          videoUrl
          featuredImage {
            altText
            sourceUrl(size: MEDIUM)
            author {
              node {
                avatar {
                  url
                }
                name
              }
            }
          }
        }
      }
    }
  }`