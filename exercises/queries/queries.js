const Post = require('./post')

const postByTitle = (title) => Post.findOne({title: title}).exec()

const postsForAuthor = (authorId) => Post.find({author: authorId}).exec()
  
const fullPostById = (id) => Post.findById(id).populate('author').exec()

const allPostsSlim = (fieldsToSelect) => Post.find({})
.select(fieldsToSelect)

const postByContentLength = (maxContentLength, minContentLength) =>
  Post.find({
    contentLength: { $gt: minContentLength, $lt: maxContentLength }
  }).exec()

const addSimilarPosts = (postId, similarPosts) =>
  Post.findByIdAndUpdate(postId, {
    $push: { similarPosts: { $each: similarPosts } },
  }, {new: true}).exec();

module.exports = {
  postByTitle,
  postsForAuthor,
  fullPostById,
  allPostsSlim,
  postByContentLength,
  addSimilarPosts
}
