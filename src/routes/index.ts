import { Router } from 'express';
import event from './event'

// Creación de la ruta
const router = Router();

router.use('/event', event)

export default router;