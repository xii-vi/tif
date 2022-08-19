import { Box, Heading, Skeleton, Stack, Text } from "@chakra-ui/react"
import '@fontsource/poppins'

export const SingleArticleCard =({articleData,loading})=>{
    const {title,content,subtitle,author} = articleData
    return(
        <>
        <Skeleton isLoaded={!loading} fadeDuration={2} rounded={'xl'}>
        <Box>
            <Stack bg={'secondary'} mt={1} py={[10,16]} px={[4,8,16]} textAlign={'center'} >
            <Heading as={'h1'} fontFamily={'Poppins'} color={'#F2F2F2'} fontWeight={'bold'}
            fontSize={['1.3125rem','3.875rem']} lineHeight={['2.1875rem','4.3125rem']}>{title}</Heading>
            <Text color={'#F2F2F2'} fontSize={['0.625rem','1rem']} py={4}>{subtitle}</Text>
            <Text pt={12} fontWeight={'bold'} color={'#F2F2F2'} fontSize={['0.6875rem','1rem']}>By {author}</Text>
            </Stack>
            <Box p={[10,20]} justifyContent={"flex-start"} display={'flex'}>
            <Text>{content}</Text>
            </Box>
        </Box>
        </Skeleton>
        
        </>
    )
}