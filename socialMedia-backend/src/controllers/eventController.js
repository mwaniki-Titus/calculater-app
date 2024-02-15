import {getEventService} from '../services/eventService.js'


export const getEvents = async (req, res) => {
    try {
        const data = await getEventService();
        if (data.length === 0) {
            res.status(404).send('Post not found');
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}