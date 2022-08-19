import { Box, Button, Image, Skeleton, SkeletonCircle, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import '@fontsource/poppins'
import '@fontsource/source-sans-pro'

export const ArticleCard = ({article,loading})=>{
    const {featured_image,title,subtitle,excerpt,slug} = article
    return(
        <>
        <Skeleton isLoaded={!loading} fadeDuration={2} rounded={'xl'}>
        <Box maxW={[300]} p={4} borderRadius={'lg'} borderWidth={1} borderColor={'#D6DCEE'} >
            <Box>
                <Image src={featured_image} alt={title} boxSize={['16.25rem']} objectFit='cover' borderRadius={'lg'} />
            </Box>
            <Stack py={4}>
                <Text noOfLines={[1]} color={'primary'} fontFamily={'Poppins'} fontSize={['1rem','xl']} fontWeight={'bold'} lineHeight={['2.1875rem','1.6875rem']} letterSpacing={['0.05em',0]}>{title}</Text>
                <Text>{subtitle}</Text>
                <Text noOfLines={[3,3,3]}>{excerpt}</Text>
            </Stack>
            <Link href={`/blog/${slug}`}>
            <Button variant={'outline'} borderColor={'border'} borderRadius={"full"} color={'border'} fontWeight={'semibold'} fontFamily=
            {'Source Sans Pro'}>Read more</Button>
            </Link>
        </Box>
        </Skeleton>
        
        </>
    )
}