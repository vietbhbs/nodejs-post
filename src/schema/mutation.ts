export const mutationName = `
    createName(title: String!, author: String!, description: String!): Name
    updateName(id: ID!, title: String, author: String, description: String): Name
    deleteName(id: ID!): String
`