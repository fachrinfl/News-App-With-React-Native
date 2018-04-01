import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import ListItem from '../ListItem/ListItem'
import noImage from '../../assets/img/noimageavailable.jpg'

const newsListItem = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.news}
            keyExtractor={(x, i) => i}
            renderItem={(dataItem) => (
                <ListItem
                    itemTitle={dataItem.item.title}
                    itemImage={dataItem.item.urlToImage !== null ? (
                        {uri : dataItem.item.urlToImage}
                    ) : (
                        noImage
                    )}
                    itemStyle={props.itemStyle}
                    onItemPressed={() => props.onClick(dataItem.item)}
                />
            )}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default newsListItem