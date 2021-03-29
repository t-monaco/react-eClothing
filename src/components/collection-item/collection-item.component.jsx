import React from 'react'

import './collection-item.styles.scss'

const CollectionItem = ({ id, imageUrl, name, price}) => {
    return (
        <div className='collection-item'>
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="preice">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem
