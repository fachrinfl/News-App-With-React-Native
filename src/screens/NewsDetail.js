import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    WebView,
    TouchableOpacity
} from 'react-native'
import {robotoWeights} from 'react-native-typography'

const WEBVIEW_REF = 'webview';

class NewsDetail extends Component {

    constructor(props) {
        super(props);
        const url = this.props.linkUrl
        this.state = {
            detailNews: url
        }

    }

    render() {

        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}>
                <WebView
                    ref={WEBVIEW_REF}
                    source={{uri: this.state.detailNews}}
                    style={{flex: 1}}
                    startInLoadingState={true}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow : 1,
        justifyContent : 'center',
        backgroundColor: "#F4F4F4"
    },
    labelNews: {
        ...robotoWeights.bold,
        fontSize: 18,
        color: "black",
        margin: 15
    }
})


export default NewsDetail