import Head from "next/head";
import Login from "../components/Login";
import { Box } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import Chat from "../components/Chat";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <Box>
      <Head>
        <title>Ayoub's ChatApp</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!session && (
        <>
          <Login />
        </>
      )}
      {session && (
        <>
          <Chat
            username={session.user.name}
            image={session.user.image}
            email={session.user.email}
          />
        </>
      )}
    </Box>
  );
}
