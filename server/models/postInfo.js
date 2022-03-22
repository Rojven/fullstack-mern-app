import mongoose from "mongoose";

//создаем схему того, что должен содержать пост
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostInfo = mongoose.model('PostInfo', postSchema);

export default PostInfo;