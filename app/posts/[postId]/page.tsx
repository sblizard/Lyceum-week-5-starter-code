export default function Post({ params }: { params: { postId: string } }) {

    const dummyPost = {
        id: params.postId,
        title: 'My First Blog Post',
        body: 'This is the content of the blog post. It provides information on various topics and engages readers with interesting content. Enjoy reading this sample post!',
        likes: 120,
        dislikes: 10,
        views: 450,
    };

    return (
        <div>
            <header>
                <h1>{dummyPost.title}</h1>
            </header>
            <main>
                <div>
                    <h2>About this post</h2>
                    <p>{dummyPost.body}</p>
                    <p>{dummyPost.id}</p>
                </div>
                <div>
                    <p>Likes: {dummyPost.likes}</p>
                    <p>Dislikes: {dummyPost.dislikes}</p>
                    <p>Views: {dummyPost.views}</p>
                </div>
            </main>
        </div>
    );
}