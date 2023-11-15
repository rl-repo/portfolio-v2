import Nav from "../components/Nav";

import { Text } from "@chakra-ui/react";

function ErrorPage() {
  return (
    <>
      <Nav />
      <main>
        <Text fontSize="3xl" color="white">
          An error occured!
        </Text>
        <Text fontSize="3xl" color="white">
          Could not find this page.
        </Text>
      </main>
    </>
  );
}

export default ErrorPage;
