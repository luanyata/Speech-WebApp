const url = 'http://localhost:3001';


const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
    'Authorization': Math.random().toString(36).substr(-8)
};


export const getInitialData = () => {
    return Promise.all([
        getCategories(),
        getPosts()
    ]).then(([categories, posts]) => (
        {
            categories,
            posts
        }
    ))
};

export const getPosts = () =>
    fetch(`${url}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const getPostsByCategory = (category) =>
    fetch(`${url}/${category}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const getPostById = (postId) =>
    fetch(`${url}/posts/${postId}`, { headers })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));


export const increaseVotes = (postId) =>
    fetch(`${url}/posts/${postId}`, {
        headers,
        method: 'POST',
        body: JSON.stringify({ option: 'upVote' })
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const decreaseVotes = (postId) =>
    fetch(`${url}/posts/${postId}`, {
        headers,
        method: 'POST',
        body: JSON.stringify({ option: 'downVote' })
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));


export const getCategories = () =>
    fetch(`${url}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
        .catch(error => console.log(error));


export const addPost = (post) =>
    fetch(`${url}/posts`, {
        headers,
        method: 'POST',
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const editPost = (post) =>
    fetch(`${url}/posts/${post.id}`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const getPostComments = (postId) =>
    fetch(`${url}/posts/${postId}/comments`, { headers })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const addComment = (comment) =>
    fetch(`${url}/comments`, {
        headers,
        method: 'POST',
        body: JSON.stringify(comment)
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));


export const increaseCommentVotes = (commentId) =>
    fetch(`${url}/comments/${commentId}`, {
        headers,
        method: 'POST',
        body: JSON.stringify({ option: 'upVote' })
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const decreaseCommentVotes = (commentId) =>
    fetch(`${url}/comments/${commentId}`, {
        headers,
        method: 'POST',
        body: JSON.stringify({ option: 'downVote' })
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const deletePost = (postId) =>
    fetch(`${url}/posts/${postId}`, {
        headers,
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const deleteComment = (commentId) =>
    fetch(`${url}/comments/${commentId}`, {
        headers,
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));

export const editComment = (comment) =>
    fetch(`${url}/comments/${comment.id}`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(comment)
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error));