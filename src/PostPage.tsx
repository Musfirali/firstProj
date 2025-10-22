import { useEffect, useState } from "react";


const PostPage= ()=>{

    type Post={
        userId: number;
        id: number;
        title: string;
        body: string;
    }

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(()=>{
        getPosts()
    }, [])


const getPosts = async()=>{

    const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
    const jsonResp = await resp.json();
    setPosts(jsonResp)
    }
    return (
        <section>
            <h1>Posts Page</h1>
            {/* <button onClick={getPosts}>Click me</button> */}
            <br></br>
            {
                posts.map(postItems =>  {
                    return <div>
                        <h2>Id: {postItems.id}</h2>
                        <h2>Body: {postItems.body}</h2>
                    </div>
                })
            }
        </section>
    )
}

export default PostPage