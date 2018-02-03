'use strict';
import {Content, Experience, Project, Skill} from './connectors';

const resolvers = {
    Query: {
        contentByMenuLang(root, args) {
            return Content.findAll({where: args});
        },
        projectsByLang(root, args) {
            return Project.findAll({where: args});
        },
        experiencesByTypeLang(root, args) {
            return Experience.findAll({where: args});
        },
        skillsByLayer(root, args) {
            return Skill.findAll({where: args});
        }
    }
};

export default resolvers;