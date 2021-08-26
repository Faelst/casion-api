import { Server } from './server';
import dont from 'dotenv'

dont.config()
new Server().getApp();
