import {makeExecutableSchema} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
    type Query {
        contentByMenuLang(menu: String, language: String): [Content]
        projectsByLang(language: String): [Project]
        experiencesByTypeLang(profileType: String, language: String): [Experience]
    }
    type Content {
        id: ID!                
        title: String
        content: String
    }
    type Project {
        id: ID!                
        year: Int
        title: String
        description: String
        tags: String
        image: String
        language: String
        active: Int
    }
    type Experience {
        id: ID!                
        title: String,
        subtitle: String,
        company: String,
        from: String,
        to: String,
        city: String,
        country: String,
        logo: String,
        description: String,
        profileType: String,
        language: String
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

// addMockFunctionsToSchema({schema, mocks});

export default schema;
