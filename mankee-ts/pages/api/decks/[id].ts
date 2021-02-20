import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        const result = await prisma.deck.delete({
            where: {
                id: Number(req.query.id)
            }
        })

        res.send(result);
    } else {
        res.send(200);
    }
}

export default handler