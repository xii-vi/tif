import { Box, Button, Flex, Heading ,Stack,Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect,useState } from "react"
import { ArticleCard } from "./cards/articleCard"

export const LatestArticle = ()=>{
    const totalPage = 2;
    const [currentPage,setCurrentPage] = useState(1);
    const [loading,setLoading] = useState(false);
    const [article,setArticle] = useState([]);
     
    useEffect(()=>{
        const fetchArticle = async()=>{
            setLoading(true)
            const res = await axios.get(`https://tif-react-assignment-api.herokuapp.com/blog/get-all?page=${currentPage}`)
            setArticle(res.data.data)
            setLoading(false)
        }
        fetchArticle();
    },[currentPage])
    return(
        <>
        <Stack spacing={[10,16]} px={[10,20]} textAlign={["center",'center','initial']}>
            <Heading color={'primary'} fontWeight={'semibold'} fontSize={['1.75rem','3.5rem']} lineHeight={['3.375rem','2.625rem']}  >Latest Article</Heading>

            <Flex justifyContent={['center','center','space-between']} alignItems='center' gap={10} flexWrap={['wrap','wrap']}>
            {article.map(singleArticle=>
                <ArticleCard article={singleArticle} loading={loading} key={singleArticle.id}/>
                )}
            </Flex>

            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={2}>
            <Button variant={'outline'} borderColor={'border'} onClick={()=>setCurrentPage(prev=>prev-1)} disabled={currentPage===1}>&lt;</Button>
            <Text>{currentPage+'/'+totalPage}</Text>
            <Button variant={'outline'} borderColor={'border'} onClick={()=>setCurrentPage(prev=>prev+1)} disabled={currentPage===totalPage}>&gt;</Button>
            </Box>
            
        </Stack>
        </>
    )
}