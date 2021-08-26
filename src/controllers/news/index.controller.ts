import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";

import NewsModel from '../../models/News.model'

class NewsControllersClass {
    constructor() { }

    async getNews(req: Request, res: Response) {
        try {
            const _news = NewsModel.find({
                delete_at: null
            })

            return res.status(200).json({
                status: true,
                news: _news
            })
        } catch (error) {
            return res.status(400).json({
                status: false,
                error: "Bad request"
            })
        }
    }

    async getNewsById(req: Request, res: Response) {
        try {
            const { _id } = req.params
            
            if (!isValidObjectId(_id))
                return res.status(400).json({
                    status: false,
                    error: "Invalid ID"
                })

            const _news = await NewsModel.findOne({
                _id: _id,
                delete_at: null
            })

            return res.status(200).json({
                status: true,
                news: _news
            })
        } catch (error) {
            return res.status(400).json({
                status: false,
                error: "Bad request"
            })
        }
    }

    async registerNews(req: Request, res: Response) {
        try {
            const { code, title, headline, subtitle, bodyText, highlight, bannerImg , smallImg } = req.body

            const _news = await NewsModel.create({
                code: code,
                title: title,
                headline: headline,
                subtitle: subtitle,
                body_text: bodyText,
                highlight: highlight,
                banner_img: bannerImg,
                small_img: smallImg
            })

            res.status(201).json({
                status: true,
                news: _news
            })
        } catch (error) {
            return res.status(400).json({
                status: false,
                error: "Bad request"
            })
        }
    }
}

export default NewsControllersClass