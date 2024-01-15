import React from "react";
import ToText from "../utils/ToText";
import ToImage from "../utils/ToImage";

export default function Blogs({blog, profile}) {
    const haveBlogs = () => {
        if(!blog.item) return;

        return blog.item.map((post, index) => {
            const imgUrl = ToImage(post.description.substring(0,5000));
            
            return (
            <a href={post.link} key={index}>
                <div className='article'>
                    <div className='article-bg' style={{backgroundImage: `url(${imgUrl? imgUrl : ''})`}}></div>
                    <div className='article-content'>
                        <span className="article-title">{post.title}</span>
                        <span className="article-text">{post.pubDate}</span>
                        <div style={{margin: "auto 0"}}></div>
                        <span className="article-text">Click to visit on Medium.com &gt;&gt;</span>
                    </div>
                </div>
            </a>
            );
        });
    }

    return (
        <div className='blogs'>
            {blog.isLoading? 'Loading...': haveBlogs()}
        </div>
    );
}