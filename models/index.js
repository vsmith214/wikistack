let Sequelize = require('sequelize');
let db = new Sequelize('postgres://localhost:5432/wikistack', { logging: false });

var Page = db.define('page', { //convention for naming models with a capital letter
    title: {
        type: Sequelize.STRING, //Default for STRING prop is 255 chars but we could change it to however many we want by passing in a numeric value
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        isUrl: true
    },
    content: {
        type: Sequelize.TEXT, // Text does not have a size constraint like String
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed') // ENUM stands for enumerated and says this field can only be one of these values and nothing else   
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    hooks: {
        beforeValidate: (page) => {
            function generateUrlTitle(title) {
                if (title) {
                    // Removes all non-alphanumeric characters from title
                    // And make whitespace underscore
                    return title.replace(/\s+/g, '_').replace(/\W/g, '');
                } else {
                    // Generates random 5 letter string
                    return Math.random().toString(36).substring(2, 7);
                }
            }

            page.urlTitle = generateUrlTitle(page.title);

        }
    }
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true },
        unique: true // email must be unique
    }
});

module.exports = {
    db: db,
    Page: Page,
    User: User
};