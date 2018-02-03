import Sequelize from 'sequelize';
import * as config from './config.json';

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect
});

db.define('content', {
    id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    language: Sequelize.STRING,
    menu: Sequelize.STRING,
}, {timestamps: false, freezeTableName: true, tableName: 'ydp_content'});

db.define('projects', {
    id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    year: Sequelize.INTEGER,
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    tags: Sequelize.STRING,
    image: Sequelize.STRING,
    language: Sequelize.STRING,
    active: Sequelize.DataTypes.BOOLEAN
}, {timestamps: false, freezeTableName: true, tableName: 'ydp_projects'});

db.define('experiences', {
    id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    title: Sequelize.STRING,
    subtitle: Sequelize.STRING,
    company: Sequelize.STRING,
    from: Sequelize.DataTypes.DATE,
    to: Sequelize.DataTypes.DATE,
    city: Sequelize.STRING,
    country: Sequelize.STRING,
    logo: Sequelize.STRING,
    description: Sequelize.STRING,
    profileType: Sequelize.STRING,
    language: Sequelize.STRING
}, {timestamps: false, freezeTableName: true, tableName: 'ydp_profile'});

db.define('skills', {
    id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    skill: Sequelize.DataTypes.STRING,
    rating: Sequelize.DataTypes.INTEGER,
    layer: Sequelize.DataTypes.STRING
}, {timestamps: false, freezeTableName: true, tableName: 'ydp_skills'});

const Content = db.models.content;
const Project = db.models.projects;
const Experience = db.models.experiences;
const Skill = db.models.skills;

export {Content, Project, Experience, Skill};