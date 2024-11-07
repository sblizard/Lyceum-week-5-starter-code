export async function generateStaticParams() {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();

    return data.posts.map((posts: { id: number}) => ({
        postId: posts.id.toString(),
    }));
}

export default async function Post(props: { params: { postId: string } }) {

    const { postId } = props.params;

    const response = await fetch(`https://dummyjson.com/posts/${postId}`);
    const post = await response.json();

    return (
        <div>
            <header>
                <h1>{post.title}</h1>
            </header>
            <main>
                <div>
                    <h2>About this post</h2>
                    <p>{post.body}</p>
                    <p>{post.id}</p>
                </div>
                <div>
                    <p>Likes: {post.reactions.likes}</p>
                    <p>Dislikes: {post.reactions.dislikes}</p>
                    <p>Views: {post.views}</p>
                </div>
            </main>
        </div>
    );
}