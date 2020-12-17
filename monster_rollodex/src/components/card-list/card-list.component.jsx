import React from 'react'
import { Card } from '../card/card.component'

import './card-list.styles.css'


export const CardList = ({monsters}) => (
    <div className='card-list'>
        {
            monsters.map(monsterObj =>(
                <Card key={monsterObj.id} monster={monsterObj}/>
            ) )
        }
    </div>
)