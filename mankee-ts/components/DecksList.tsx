import { useState, useEffect } from 'react';
import { Deck } from '@prisma/client';
import axios from 'axios';

export default function DeckList() {
    const [decks, setDecks] = useState<Deck[] | undefined>(undefined)
    useEffect(() => {
        const fetchDecs = async () => {
            const dcs = await axios.get<Deck[]>('/api/decks');
            console.log(dcs.data);
            setDecks(dcs.data);
        }

        fetchDecs()
    }, [])

    return (
        <>
        {
            !decks && (<p>Loading nah</p>)
        }
        <ul>
            {
                decks && decks.map((deck) => (<li>{deck.name}</li>))
            }
        </ul>
        </>
    )
}