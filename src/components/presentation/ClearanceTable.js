import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

const ClearanceTable = ({ columns, data }) => {
    
    renderRow = () => {
        return (
            data.map((item, i) => {
                return (
                    <View style={[styles.row, {borderBottomColor:  i < data.length -1 ? '#ccc' : 'transparent'}]} key={i}>
                        {
                            columns.map(column => {
                                return  column.render ? 
                                    <View style={styles.col} key={column.name}>
                                        {column.render(item)}
                                    </View>
                                    : 
                                    <View style={styles.col} key={column.name}>
                                        <Text style={styles.value}>{item[column.name]}</Text>
                                    </View>  
                            }) 
                        }
                    </View>
                )
            })
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {columns.map(item => (
                    <Text key={item.name} style={styles.title}>{item.label}</Text>
                ))}
            </View>
            <View style={styles.body}>
                {renderRow()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    title: {
        fontSize: 17,
        fontWeight: '600',
        fontFamily: 'Bahnschrift',
        flex: 1,
        textAlign: 'center'
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingBottom: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10
    },
    value: {
        fontSize: 12,
    },
    col: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ClearanceTable;