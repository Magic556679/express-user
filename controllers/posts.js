const handleError = require('../service/handleError');
const handleSuccess = require('../service/handleSuccess');
const Posts = require('../models/postsModel');

const posts = {
  async getPosts(req, res) {
		console.log(req.query);
    const allPosts = await Posts.find();
		handleSuccess(res, allPosts);
  },
  async createdPosts(req, res) {
    try {
			const { body } = req;
			if(body.content){
				const newPosts = await Posts.create({
						name: body.name,
						content: body.content,
						tags: body.tags,
						type: body.type
				})
				handleSuccess(res, newPosts);
			} else {
				handleError(res);
			}
		} catch (err){
			handleError(res, err)
		}
  },
	async deleteAllPosts(req, res){
    await Posts.deleteMany({})
		const allPosts = await Posts.find();
		handleSuccess(res, allPosts);
  },
	async deleteByIdPosts(req, res) {
    try {
			const paramsId = req.params.id;
			await Posts.findByIdAndDelete(paramsId)	
			const posts = await Posts.find();
			handleSuccess(res, posts);
		} catch (err) {
			handleError(res, err);
		}
  },
	async patchPosts(req, res) {
    try {
			const paramsId = req.params.id;
			const findId = await Posts.find({'_id': paramsId});
			const data = req.body
			if(data.content){
				await Posts.findByIdAndUpdate(findId, data);
				const posts = await Posts.find({})
				handleSuccess(res, posts);
			} else {
				handleError(res);
			}
			} catch (err) {
				handleError(res, err);
		}
  }
}

module.exports = posts;