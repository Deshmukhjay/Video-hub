import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box bgColor={"blackAlpha.900"} minH={'40'} p={'16'} color={'white'} >
            <Stack direction={['column', 'row']} >
                <VStack alignItems={'stretch'}w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                        subscribe to get updates
                    </Heading>
                    <HStack borderBottom={"2px solid white"} py={2}>
                        <Input placeholder='Enter Email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                        <Button p={0} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                            <AiOutlineSend />
                        </Button>
                    </HStack>
                </VStack>
          <VStack w={'full'} 
          borderLeft={['none','1px solid white']}
          borderRight={['none','1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}  >
                video hub
            </Heading>
            <Text>All rights recieved</Text>
          </VStack>
          <VStack w={'full'}>
            <Heading size={'md'}textTransform={'uppercase'}>social media</Heading>
            <Button variant={'link'} colorScheme='purple'>
                <a target='blank' href='http://instagram.com/jaydeshmukh_98'>
                    Instagram
                </a>
            </Button>
            <Button variant={'link'} colorScheme='purple'>
                <a target='blank' href='http://linkedin.com/in/jay-deshmukh-6b99b5249'>
                    Linkedin
                </a>
            </Button>
            <Button variant={'link'} colorScheme='purple'>
                <a target='blank' href='http://github.com'>
                    Github
                </a>
            </Button>
          </VStack>
            </Stack>
        </Box>
    )
}

export default Footer