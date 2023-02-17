import React from 'react'
import Articles from '../components/blog/articles/Articles'
import Hero from '../components/blog/hero/Hero'
import Footer from '../components/common/footer/Footer'
import Header from '../components/home/header/Header'

const Blog = () => {
    return (
        <>
            <Header />
            <Hero />
            <Articles />
            <Footer background="rgb(207, 182, 236)" color="#41079F" icon="#FDEF97" button="#41079F" />

        </>
    )
}

export default Blog