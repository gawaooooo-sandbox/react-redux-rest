import React from 'react';


export interface PostProps {
   id: string;
   body: string;
   created_at: string;
   updated_at: string;
}

const Post: React.FC<PostProps> = ({
    id = '',
    body = '',
    created_at = '',
    updated_at = ''
}) => {
    return (
        <li>
            {body}
        </li>
    )
}

export default Post;