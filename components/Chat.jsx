import firebase from "firebase";
import Message from "./Message";
import FlipMove from "react-flip-move";
import db from "../firebase";
import React, { useState, useEffect } from "react";
import { signOut} from "next-auth/client";


import {
  Input,
  FormControl,
  InputGroup,
  InputRightAddon,
  Image,
  Center,
} from "@chakra-ui/react";
import { Box, Flex, Button } from "@chakra-ui/react";
function App({username,image,email}) {
 
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessages = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: username,
      image: image
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);



  return (
    <Box className='App' h="100vh" >
      <Box >
      {<Button onClick={() => signOut()}>Sign out</Button>}
        <Center marginBottom='20px'>
          <Image
          marginTop="30px"
            src='https://i.ibb.co/sw4SxBM/messengerlogo.png'
            alt='logo jamil'
            w={["50px", "50px", "80px", "80px"]}
          />
        </Center>
        <Center>
        <h1>Welcome {username} ! </h1>
        </Center>
      </Box>

      <Flex justifyContent='center' marginTop='20px'>
        <form>
          <FormControl>
            <InputGroup>
              <Input
                placeholder='Type a message'
                w='200px'
                variant='flushed'
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <InputRightAddon
                children={
                  <Button
                    disabled={!input}
                    type='submit'
                    onClick={sendMessages}
                  >
                    Send
                  </Button>
                }
              />
            </InputGroup>
          </FormControl>
        </form>
      </Flex>

      {/*messages*/}
      <Box marginTop='30px'>
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message username={username} message={message} key={id} image={image} email={email}/>
          ))}
        </FlipMove>
      </Box>
    </Box>
  );
}

export default App;
