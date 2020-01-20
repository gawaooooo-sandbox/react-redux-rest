import React from 'react';
import Post, {PostProps} from './Post'

export interface PostListProps {
    posts: PostProps[];
}

const PostList: React.FC<PostListProps> = ({
    posts = []
}) => {
    return (
        <ul>
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ) )}
        </ul>
    )
}

export default PostList;