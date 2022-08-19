import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios"
import { Footer, Navbar,SingleArticleCard } from "../../components";

const SingleArticle =()=>{
    const router = useRouter();
    const slug = router.query.slug;
    const [articleData,setArticleData] = useState([])
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        const getArticle = async()=>{
            setLoading(true)
            const res = await axios.get(`https://tif-react-assignment-api.herokuapp.com/blog/get-single?slug=${slug}`)
            setArticleData(res.data.data)
            setLoading(false)
        }
        getArticle()
    },[slug])
    return(
        <>
        <Navbar />
        <SingleArticleCard articleData={articleData} loading={loading} />
        <Footer style={{backgroundColor:"#2C2C2C",textColor:"#F2F2F2",socialMediaColor:"#F2F2F2"}} />
        </>
    )
}

export default SingleArticle