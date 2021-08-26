import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

import graphqlSchemas from '../graphql/schemas/index.graphql'
import graphqlResolvers from '../graphql/resolvers'

import routers from '../routers/index.routers'

export class Server {
    public express: express.Application;
    private port = process.env.PORT || 3333;

    constructor() {
        this.express = express();
        this.middleware();
        this.database();
        this.routes();
        this.listen();
    }

    public getApp(): express.Application {
        return this.express
    }

    private middleware(): void {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use('/graphql', graphqlHTTP({
            schema: buildSchema(graphqlSchemas),
            graphiql: true,
            rootValue: graphqlResolvers
        }));
    }

    private database(): void {
        const mongoUrl: String | any = process.env.MONGO_URI_CONNECTION
        mongoose
            .connect(
                mongoUrl,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                }
            )
            .then(() => {
                console.log("MongoDB connected...");
            })
            .catch(() => {
                console.log("Error while trying to connect to MongoDB");
            });
    }

    private routes(): void {
        this.express.use('/api', routers)
        this.express.use('/static/files', express.static(path.resolve(`${path.resolve(__dirname, '..')}/repository/`)));
    }

    private listen(): void {
        this.express.listen(this.port, () => {
            console.log("Server is running on port " + this.port);
        });
    }
}