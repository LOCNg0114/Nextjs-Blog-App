import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./child/Author"
import Fetcher from "@/lib/fetcher"
import Spinner from "./child/Spinner"
import Error from "./child/Error"

export default function Section3() {

    const { data, isLoading, isError } = Fetcher('api/popular')
    
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

    return (
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

            {/* swiper */}
            <Swiper
                breakpoints={{
                    640 : {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}
            >
                {
                        data.map((value, index: number) => (
                            <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
                        ))
                }
            </Swiper>

        </section>
    )
}


function Post({ data }){

    const { id, title, category, img, description, published, author } = data;

    return (
        <div className="grid">
            <div className="images">
                <Link href={`/posts/${id}`}>
                    {/* <a> */}
                        <Image src={img || ""} width={600} height={400} alt="/" />
                    {/* </a> */}
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`} legacyBehavior>
                        <a className="text-orange-600 hover:text-orange-800">
                            {category || "No Category"}
                        </a>
                    </Link>
                    <Link href={`/posts/${id}`} legacyBehavior>
                        <a className="text-gray-800 hover:text-gray-600">
                            - {published || ""}
                        </a>
                    </Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`} legacyBehavior>
                        <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
                            {title || "No Title"}
                        </a>
                    </Link>
                </div>
                <p className="text-gray-500 py-3">
                {description || "No Description"}
                </p>
                { author ? <Author {...author}></Author> : <></>}
            </div>
        </div>
    )
}