import NewsModel from '../../../models/News.model'

const NewsResolvers = {
    news: () => NewsModel.find({ delete_at: null }),
    new: (_id: String) => NewsModel.findById(_id)
}

export default NewsResolvers