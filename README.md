# server-yahimaduarte-site

Apollo GraphQL Server for querying mysql database of the web site www.yahimaduarte.com.

## Getting started

```bash
git clone https://github.com/yduartep/server-yahimaduarte-site
cd server-yahimaduarte-site
npm install
npm start
```

Then open [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

When you paste this on the left side of the page:

```graphql
{
  query {
    contentByMenuLang(menu: "Biografia", language: "ES"){
      id,
      title,
      content
    }
  }
}
```

and hit the play button (cmd-return), then you should get this on the right side:

```json
{
    "data": {
      "contentByMenuLang": {
        "id": "2",
        "title": "BIOGRAFIA",
        "content": "..."
        }
    }
}
```
