import { model, Schema } from 'mongoose';
import { NewsInterface } from '../interfaces/News.interface';
import utils from '../utils'

interface NewsModelInterface extends NewsInterface, Document {
    _id?: any | string;
}

const NewsSchema = new Schema({
    code: {
        type: String
    },
    title: {
        type: String
    },
    headline: {
        type: String
    },
    subtitle: {
        type: String
    },
    body_text: {
        type: String
    },
    highlight: {
        type: Boolean
    },
    banner_img: {
        type: String
    },
    small_img: {
        type: String
    },
    create_at: {
        type: Date,
        default: utils.getCurrentTime()
    },
    update_at: {
        type: Date,
        default: null
    },
    delete_at: {
        type: Date,
        default: null
    }
})

export default model<NewsModelInterface>("news", NewsSchema)