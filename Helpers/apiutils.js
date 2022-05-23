import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

//********************* */
//gql config
//********************** */
const url = "https://gudof-backoffice-api.herokuapp.com/graphql";
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

// export const getServerSideProps = async (context) => {
export const getCategories = async () => {
  const query = gql`
    query categories {
      categories(filter: { parentUrl: "/" }) {
        edges {
          node {
            _id
            slug
            desc
            title
            url
          }
        }
      }
    }
  `;

  const { data } = await client.query({ query });

  const categories = data.categories.edges.map(({ node }) => {
    return {
      id: node._id,
      title: node.title,
      desc: node.desc,
      url: node.url,
    };
  });

  return {
    categories,
  };
};
