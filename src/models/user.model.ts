import mongoose, { Schema, Model, Document } from 'mongoose';

type UserIdentity = Document & {
    fullName: string;
    username: string;
    email: string;
    password: string;
    enabled: string;
    role: string;
};

type UserInput = {
    fullName: UserIdentity['fullName'];
    username: UserIdentity['username'];
    email: UserIdentity['email'];
    password: UserIdentity['password'];
    enabled: UserIdentity['enabled'];
    role: UserIdentity['role'];
};

const UserSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        enabled: {
            type: Boolean,
            default: true,
        },
        role: {
            type: Schema.Types.ObjectId,
            ref: 'Role',
            required: true,
            index: true,
        },

    },
    {
        collection: 'users',
        timestamps: true,
    }
);

const User : Model<UserIdentity> = mongoose.model<UserIdentity>('User', UserSchema);

export { User, UserInput, UserIdentity };
