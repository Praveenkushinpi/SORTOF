import mongoose, { Schema, Document } from 'mongoose';
import { Content } from 'next/font/google';

export interface Message extends Document {
    content: string;
    createdAt: Date;
}

export interface User extends Document {
    username: string;
    email: string;
    isAlreadyInWaitlist: boolean;
}

const MessageSchema: Schema<Message> = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const UserSchema: Schema<User> = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    isAlreadyInWaitlist: {
        type: Boolean,
        default: false
    }
});

const UserModel = 
     (mongoose.models.User as mongoose.Model<User>) ||
      mongoose.model<User>('User', UserSchema );

export default UserModel;