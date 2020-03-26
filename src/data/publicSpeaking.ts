export default {
  publicSpeakings: [
    {
      name: "Don't block the frontend!",
      description:
        'The concept is that before development starts on a new product, the frontend and backend teams agree on a GraphQL API, create the API using mocked data, and then both teams work simultanesouly on the new product until an MVP is ready. Lastly, both teams push their code and the feeature should "just work."',
      location: "GraphQL Montreal",
      url: "https://bit.ly/dont-block-the-frontend"
    },
    {
      name: "An introduction to Cypress",
      description:
        "This covered how to use Make School's custom Cypress commands to interact with Rails, like logging in programmatically, creating models, and executing Ruby files in the Rails context. We then wrote an integration test for our registering for courses together to put these commands to use in a real-world scenario.",
      url:
        "https://makeschool.github.io/an-introduction-to-cypress/?slide=0&slideElement=-1",
      location: "Make School"
    },
    {
      name: "Testing React with Enzyme and Jest",
      description:
        "This covered best practices for testing React components, such as interacting with the page as a user would, avoid testing implementation details like state, and using stable selectors like test ids. Note: Nowadays it's better to use a framework like @testing-library/react and select components by text, label text, etc. instead of test ids.",
      location: "Make School"
    },
    {
      name: "Writing GraphQL queries and mutations with Apollo",
      description:
        "This covered how to switch the mental model from using our legacy GraphQL client Relay Classic to the new Apollo Client for React. We discussed syntax changes, how to update the Apollo cache after a mutation, and how to use a custom higher order component and error handlers that we created to handle loading states and server or mutation errors.",
      location: "Make School"
    }
  ]
};
