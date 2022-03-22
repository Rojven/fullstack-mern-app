import mongoose from "mongoose";
import PostInfo from "../models/postInfo.js";

//функции, выполняемые при переходе по путям

export const getPosts = async (request, response) => {
    try {

        //получаем данные из схемы
        const postInfo = await PostInfo.find();

        //возвращаем ответ
        return response.status(200).json(postInfo);

    } catch(err) {
        return response.status(404).json({ message: err.message })
    }
}

export const createPost = async (request, response) => {
    //при POST запросах необходимо иметь доступ к телу запроса
    const body = request.body;
    //помещаем в схему тело(пост)
    const newPost = new PostInfo(body);

    try {
        //сохраняем новый пост
        await newPost.save();

        return response.status(201).json(newPost);

    } catch(err) {

        return response.status(409).json({ message: err.message })
    }
}

export const updatePost = async (request, response) => {
    //получаем id изменяемого поста
    const {_id} = request.params;

    const post = request.body;

    //проверяем, существует ли пост
    if(!mongoose.Types.ObjectId.isValid(_id)) return response.status(404).send('Такого поста не существует');

    const updatedPost = await PostInfo.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    response.json(updatedPost);
}

export const deletePost = async (request, response) => {
    const {id} = request.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send('Такого поста не существует');

    await PostInfo.findByIdAndRemove(id);

    response.json({ message: 'Пост удален!'});
}

export const likePost = async (request, response) => {

    const {id} = request.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send('Такого поста не существует');

    const post = await PostInfo.findById(id);

    const updatedPost = await PostInfo.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, {new: true})

    response.json(updatedPost);
}