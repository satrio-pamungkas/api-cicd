import { Router } from 'express';
import { createRole, deleteRole, getAllRoles, getRole, updateRole, testing } from '../controllers/role.controller';

const RoleRoute = () => {
    const router = Router();

    router.get('/', testing)
    router.post('/roles', createRole);
    router.get('/roles', getAllRoles);
    router.get('/roles/:id', getRole);
    router.put('/roles/:id', updateRole);
    router.delete('/roles/:id', deleteRole);

    return router;
};

export { RoleRoute };

