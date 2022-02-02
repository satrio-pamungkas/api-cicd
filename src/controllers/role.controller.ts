import { Request, response, Response } from 'express';
import { Role, RoleInput } from '../models/user.role';

const testing = async (req: Request, res: Response) => {
    return res.status(200).json({
        pesan: 'Hello World'
    });
    
}

const createRole = async (req: Request, res: Response) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(422).json({
            status: 422,
            message: 'Both field is required',
        })
    }

    const roleInput: RoleInput = {
        name, description
    };

    const roleCreated = Role.create(roleInput);

    return res.status(201).json({
        status: 201,
        data: roleCreated
    });
};

const getAllRoles = async (req: Request, res: Response) => {
    const roles = await Role.find().sort('-createdAt').exec();
    
    return res.status(200).json({
        status: 200,
        data: roles
    });
};

const getRole = async (req: Request, res: Response) => {
    const { id } = req.params;

    const role = await Role.findById({ _id: id });

    if (!role) {
        return res.status(404).json({
            status: 404,
            message: `Role with ${id} not found`
        })
    }

    return res.status(200).json({
        status: 200,
        data: role
    });
};

const updateRole = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;

    const role = await Role.findOne({ _id: id });

    if (!role) {
        return res.status(404).json({
            status: 404,
            message: `Role with ${id} not found`
        });
    }

    if (!name || !description) {
        return res.status(422).json({
            status: 422,
            message: 'Both field is required'
        });
    }

    await Role.updateOne({ _id: id }, { name, description });

    const roleUpdated = await Role.findById(id, { name, description });

    return res.status(200).json({
        status: 200,
        data: roleUpdated
    });
};

const deleteRole = async (req: Request, res: Response) => {
    const { id } = req.params;

    const role = await Role.findByIdAndDelete(id);

    if (!role) {
        return res.status(404).json({
            status: 404,
            message: `Role with ${id} not found`
        });
    }

    return res.status(200).json({
        status: 200,
        message: 'Succesfully deleted'
    });
};

export { createRole, getAllRoles, getRole, updateRole, deleteRole, testing };

