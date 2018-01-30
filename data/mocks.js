'use strict';

const mocks = {
    String: () => 'It works!',
    Content: () => ({menu: "Biografia", lang: "en"}),
    Query: () => ({
        contentByMenuLang: () => {
            return {id: 1, title: "Biografia", content: "Esta es la biografia"};
        }
    }),
};

export default mocks;
