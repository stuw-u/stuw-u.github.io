import React, { useEffect, useState }  from "react";
import Blogs from "../components/Blogs";

export default function Articles () {
    
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@studiocraftapp";
    const [profile, setProfile] = useState({
        name: 'Antonin Francoeur',
        profileImage: '',
        profileUrl: ''
    });
    const [blog, setBlog] = useState({
        item: [],
        isLoading: true,
        error: null
    });

    useEffect(() => {
        fetch(mediumURL)
        .then(res => res.json())
        .then(info => {
            const image = info.feed.image;
            const link = info.feed.link;
            const blogs = info.items;
            const posts = blogs.filter(post => post.categories.length > 0);
            setProfile(p => ({...p, profileUrl: link, profileImage: image}));
            setBlog({item: posts, isLoading: false});
        })
        .catch(err => setBlog({error: err.message}));
    }, []);

    return (
        <>
            <p className="title">Articles.</p>
            <p>Here are some articles I've written over the years about some of the issues I've encountered and the solution for them. I still have much more to learn than I have to teach, but it won't hurt to write my journey down!</p>

            <Blogs blog={blog} profile={profile}></Blogs>
        </>
    );
}