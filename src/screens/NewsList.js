import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'
import {robotoWeights} from 'react-native-typography'
import {connect} from 'react-redux'
import {fetchNews, fetchTopHeadLines, addPage} from '../redux/actions'

import NewsListItem from '../components/NewsListItem/NewsListItem'
import TopItem from '../components/ListItem/ListItem'
import Loading from '../components/Common/Loading'

class NewsList extends Component {

    state = {
        page: 1
    }

    componentDidMount() {
        this.props.onFetchNews(this.state.page)
        this.props.onFetchTopHeadlines(this.state.page)
    }

    onPressNews = (data) => {
        this.props.navigator.push({
            title: data.title,
            screen: "NewsApp.NewsDetail",
            passProps: {linkUrl: data.url},
            animated: true,
            animationType: 'fade'
        })
    }

    loadMoreNews = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    render() {

        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}>
                {
                    this.props.loading ? (
                        <View style={{alignSelf: 'center'}}>
                            <Loading/>
                        </View>
                    ) : (
                        <View style={{flex: 1}}>
                            <View style={{flex: 2}}>
                                <Text style={styles.labelNews}>Top News</Text>
                                <TopItem
                                    itemImage={{uri: this.props.topNews.urlToImage}}
                                    itemTitle={this.props.topNews.title}
                                    onItemPressed={() => this.onPressNews(this.props.topNews)}
                                />
                            </View>
                            <View style={{flex: 2}}>
                                <Text style={styles.labelNews}>Top Headlines</Text>
                                <NewsListItem
                                    news={this.props.topHeadlines}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    itemStyle={[styles.itemList, {width: 250, marginRight: 10, height: "100%"}]}
                                    onClick={this.onPressNews}
                                    onEndReached={() => this.loadMoreNews}
                                    onEndReachedThreshold={0}
                                />
                            </View>
                            <View style={{flex: 6, paddingBottom: 10}}>
                                <Text style={styles.labelNews}>Recent News</Text>
                                <NewsListItem
                                    news={this.props.news}
                                    showsVerticalScrollIndicator={false}
                                    itemStyle={[styles.itemList]}
                                    onClick={this.onPressNews}
                                    onEndReached={() => this.loadMoreNews}
                                    onEndReachedThreshold={0}
                                />
                            </View>
                        </View>
                    )
                }
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
    },
    itemList:{
        borderRadius: 5
    }
})

const mapStateToProps = state => {
    return {
        news: state.news.items,
        icon: state.news.icon,
        topNews: state.news.topNews,
        topHeadlines: state.news.topHeadlines,
        loading: state.news.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNews: (page) => dispatch(fetchNews(page)),
        onFetchTopHeadlines: (page) => dispatch(fetchTopHeadLines(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)