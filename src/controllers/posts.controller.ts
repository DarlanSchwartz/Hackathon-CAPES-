import { Request, Response } from "express";
import PostService from "@/services/post.services";
import { Post } from "@/protocols/post.types";
import { HttpStatus } from "@/protocols/error.types";

async function getAll(req: Request, res: Response) {
  const limit = Number(req.query.limit);
  const name = req.query.name;
  const posts = await PostService.getAll(limit, name?.toString());
  return res.send(posts);
}

async function create(req: Request, res: Response) {
  const post = req.body as Post;
  await PostService.create(post);
  return res.sendStatus(HttpStatus.CREATED);
}

async function like(req: Request, res: Response) {
  const id = Number(req.params.id);
  await PostService.like(id);
  return res.sendStatus(HttpStatus.ACCEPTED);
}

async function edit(req: Request, res: Response) {
  const id = Number(req.params.id);
  const newPost: Post = req.body;
  await PostService.update(id, newPost);
  return res.sendStatus(HttpStatus.ACCEPTED);
}

async function remove(req: Request, res: Response) {
  const id = Number(req.params.id);
  await PostService.remove(id);
  return res.sendStatus(HttpStatus.ACCEPTED);
}

const PostController = { getAll, create, like, edit, remove };

export default PostController;