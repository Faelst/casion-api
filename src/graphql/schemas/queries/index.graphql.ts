const querySchema = `
    type Query {
        getTest: String
        news: [News!]!
        new(_id: ID!): News
    }
`

export default querySchema