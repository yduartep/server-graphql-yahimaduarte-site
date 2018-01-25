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
var ContentModel = db.define('content', {
    id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    language: Sequelize.STRING,
    menu: Sequelize.STRING,
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    // disable the modification of table names
    freezeTableName: true,

    // define the table's name
    tableName: 'yd_content'
});

const Content = db.models.content;

export {Content};