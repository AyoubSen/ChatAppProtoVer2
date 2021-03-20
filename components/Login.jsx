import React from 'react';
import {Box,Button,Flex,Text,Heading,Wrap, Input,Stack,Center} from "@chakra-ui/react";
import Link from 'next/link'
import { signIn} from "next-auth/client";


function Login() {
    return (
        <Box p="120px 222px 222px 222px" h="100vh" bg='#EDFDFD'>
            <Flex h="100%" alignItems="center" justifyContent="space-between">
                <Flex flexDirection="column">
                     <Heading fontWeight="bold" fontSize="60px" color="#3182ce">Ayoub's Chat App</Heading>
                     <Wrap w="500px" marginTop="20px">
                         <Text fontSize="25px">Definitely not another jumia version of Messenger</Text>
                     </Wrap>
                </Flex>
                <Flex flexDirection="column" p="10px" bg="white" boxShadow="0 0 5px gray">
                   <Stack spacing={3}>
                        <Stack spacing={3}>
                        <Input w="363px" placeholder="Enter your email" disabled/>
                        <Input w="363px" placeholder="Password" disabled />
                        </Stack>
                    
                    <Button colorScheme="blue" fontSize="20px" fontWeight="bold" onClick={() => signIn()}>Log in</Button>
                    </Stack>
                <Flex justifyContent="center" marginTop="10px" >
                      <Center  w="fit-content" _hover={{textDecoration:"underline"}}>
                          <Link href="/"><a>Forgotten password?</a></Link>
                      </Center>
                </Flex>

                    
                </Flex>
            </Flex>

        </Box>
    )
}

export default Login
