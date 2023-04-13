import Footer from "./Footer";
import Navbar from "./Navbar";
import PokeMone from "./PokeMone";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function Home() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <Navbar />
        <PokeMone />
        <Footer />
      </main>
    </ApolloProvider>
  );
}
