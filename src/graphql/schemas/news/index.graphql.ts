const NewsSchema = `
    scalar Date
    type News {
        _id: String!
        code: String!
        title: String!
        headline: String!
        subtitle: String!
        body_text: String!
        highlight: Boolean
        banner_img: String!
        small_img: String!
        create_at: Date
        update_at: Date
        delete_at: Date
    }
`

export default NewsSchema