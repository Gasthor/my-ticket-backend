import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

// Configuración del puerto
const PORT: number = Number(process.env.PORT) || 3000;

// Inicializar prisma

const prisma = new PrismaClient()

// Creación de la ruta
const router = Router();

router.get('/', async(req, res) => {
    const getEvents = await prisma.event.findMany()

    prisma.$disconnect

    res.status(200).json(getEvents)


})
router.post('/', async (req, res) => {
    const event = await prisma.event.create({
        data: {
            name: 'test',
            startTime: '2020-11-23T17:41:59+11:00',
            endRegistration: '2020-11-23T17:41:59+11:00',
            ubication: "test",
            capacity: 10
        }

    })
    console.log(event)

    prisma.$disconnect

    res.send({
        message: `Evento creado con exito ${event}`,
    });
});

export default router;