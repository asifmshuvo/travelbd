import gql from 'graphql-tag'

export const GET_RECENT_VIDEOS = gql`
query getRecentVideos($after: String, $before: String, $first: Int) {
    videos(after: $after, before: $before, first: $first) {
      pageInfo {
        endCursor
      }
      nodes {
        id
        title(format: RAW)
        date
        videoInformation {
          featuredImage {
            # altText
            sourceUrl(size: MEDIUM)
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
        id
        title(format: RAW)
        date
        videoInformation {
          featuredImage {
            # altText
            sourceUrl(size: MEDIUM)
          }
        }
      }
    }
  }`

export const GET_SINGLE_VIDEO = gql`
query getSingleVideo($id: ID!) {
  video(id: $id) {
    title
    date
    videoInformation {
      videoUrl
      featuredImage {
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
    content(format: RENDERED)
  }
}`