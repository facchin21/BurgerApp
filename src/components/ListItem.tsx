import { FlatList } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export const ListItem = () => {
    const itemsData = [
        {
            id: '01',
            title: 'Todas',
            link: '/todas',
        },
        {
            id: '02',
            title: 'Burgers de la casa',
            link: '/burgerscasa',
        },
        {
            id: '03',
            title: 'Burgers Clasicas',
            link: '/burgersclasicas'
        },
        {
            id: '04',
            title: 'Burgers en promocion',
            link: 'burgersenpromo',
        },
    ]
    return (
        <>
            <FlatList
                data={itemsData}
                renderItem={({ item }) => <Item title={item.title} link={item.link} />}
                keyExtractor={item => item.id}
                className='flex flex-row'
            />
        </>
    )
}

const Item = ({ title, link }) => {
    return (
        <Link
            href={link}
            className='block bg-detailDark'>
            {title}
        </Link>
    )
}