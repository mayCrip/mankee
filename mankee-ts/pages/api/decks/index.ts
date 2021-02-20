import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const result = await prisma.deck.create({ data: req.body })

        res.json(result);
    } else if (req.method === 'GET') {
        const result = await prisma.deck.findMany({
            include: {
                Card: {
                    include: {
                        CardExample: true
                    }
                }
            }
        })

        res.json(result)
    }
}

export default handler;