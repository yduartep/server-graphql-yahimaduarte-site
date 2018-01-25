import {makeExecutableSchema} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
    type Query {
        getContentByMenuLang(menu: String, language: String): Content
    }
    type Content {
        id: ID!                
        title: String
        content: String
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

// addMockFunctionsToSchema({schema, mocks});

export default schema;
