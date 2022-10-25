import mongoose from 'mongoose';

const { Schema } = mongoose;

// Interface
export interface IName {
    title: string;
    description: string;
    author: string;
}

// Schema
const nameSchema = new Schema<IName>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
});

export const NameModel = mongoose.model('name', nameSchema);
