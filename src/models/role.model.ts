import mongoose, { Schema, Model, Document } from 'mongoose';

type RoleDocument = Document & {
    name: string;
    description: string | null;
};

type RoleInput = {
    name: RoleDocument['name'];
    description: RoleDocument['description'];
};

const RoleSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'roles',
        timestamps: true,
    },
);

const Role: Model<RoleDocument> = mongoose.model<RoleDocument>('Role', RoleSchema);

export { Role, RoleDocument, RoleInput };