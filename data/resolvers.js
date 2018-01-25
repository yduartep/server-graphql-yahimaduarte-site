import {Content} from './connectors';

const resolvers = {
    Query: {
        getContentByMenuLang(root, args) {
            return Content.find({where: args});
        }
    }
};

export default resolvers;