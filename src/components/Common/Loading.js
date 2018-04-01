import React, { Component } from 'react'
import Spinner from 'react-native-spinkit'

class Loading extends Component {
    render(){
        return(
            <Spinner
                isVisible={true}
                size={50}
                type={'ThreeBounce'}
                color={'rgba(189, 57, 49, 1)'}/>
        )
    }
}

export default Loading