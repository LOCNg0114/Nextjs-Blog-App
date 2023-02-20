import Format from '@/layout/Format'
import Author from '@/components/child/Author'
import Image from 'next/image'
import Related from '@/components/child/Related'
import getPost from '@/lib/helper'
import Fetcher from '@/lib/fetcher'
import Spinner from '@/components/child/Spinner'
import Error from '@/components/child/Error'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import data from '../../utils/data'

// export default function Page({ fallback }: any){
//     const router = useRouter()
//     const { postId } = router.query;
//     const { data, isLoading, isError } = Fetcher(`api/posts/${postId}`)

//     if(isLoading) return <Spinner></Spinner>
//     if(isError) return <Error></Error>

//     return (
//         <SWRConfig value={ { fallback }}>
//             <Article {...data}></Article>
//         </SWRConfig>
//     )

// }

export default function Article({ title, img, subtitle, description, author }: any){

    return (
        <Format>
            <section className='container mx-auto md:px-2 py-16 w-1/2'>
                <div className='flex justify-center'>
                    { author ? <Author {...author}></Author> : <></>}
                </div>

                <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5'>{title || "No Title"}</h1>

                    <p className='text-gray-500 text-xl text-center'>{subtitle || "No Title"}</p>

                    <div className="py-10">
                        <Image src={img || "/"} width={900} height={600} alt=""></Image>
                    </div>

                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        {description || "No Description"}
                    </div>

                </div>  

                <Related></Related>
            </section>
        </Format>
    )
}


export async function getStaticProps( { params }: any ){
    const [post] = data.Posts.filter(post => post.id === Number(params.postId ))

    return {
       props : {
            ...post
       }
    }
}

export async function getStaticPaths(){
    const posts = data.Posts
    const paths = posts.map((value: any) => {
        return {
            params : {
                postId : value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback : false
    }
}