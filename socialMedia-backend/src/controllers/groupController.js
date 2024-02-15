import { getGroupService } from '../services/groupService.js';

export const getGroups = async (req, res) => {
    try {
        const data = await getGroupService();
        if (data.length === 0) {
            res.status(404).send('Group not found');
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}