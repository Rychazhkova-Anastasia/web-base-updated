import { Api, CommentDTO, PostDTO } from "./Api";

const api = new Api();

/**
 * Необходимо реализовать функцию для получения первых 5 постов с нечётными id
 */
export async function getOddPosts(): Promise<PostDTO[]> {
    const posts = await api.getPosts();
    const oddPosts = posts.filter(post => post.id %2 !== 0);
    return oddPosts.slice(0,5);

};

/**
 * Необходимо реализовать функцию для получения первых 5 комментариев с чётными id
 */
export async function getEvenComments(): Promise<CommentDTO[]> {
    const comments = await api.getComments();
    const evenComments = comments.filter(comment => comment.id %2 === 0);
    return evenComments.slice(0,5);

}