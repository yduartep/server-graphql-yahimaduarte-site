import Sequelize from 'sequelize';
import * as config from './config.json';

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect
});

// Create Content Table Structure
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
    description: Sequelize.STRING,
    technologies: Sequelize.STRING,
    image: Sequelize.STRING,
    language: Sequelize.STRING,
}, {timestamps: false, freezeTableName: true, tableName: 'yd_profile'});

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

const Content = db.models.content;
const Project = db.models.projects;
const Experience = db.models.experiences;

export {Content, Project, Experience};