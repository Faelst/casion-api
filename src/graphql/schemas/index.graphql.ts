import NewsSchema from './news/index.graphql'
import querySchema from './queries/index.graphql'

const schemas = `
    ${querySchema}
    ${NewsSchema}
`

export default schemas