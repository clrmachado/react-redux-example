import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/newsActions'

class NewsList extends Component {
  componentDidMount () {
    this.props.dispatch(fetchNews())
  }
  render () {
    const { error, loading, news } = this.props

    if (error) {
      return <div> Error! { error.message }</div>
    }

    if (loading) {
      return <div> Loading... </div>
    }
    console.log('thise are the articles', news ? news.articles : 'no news')
    return (
      <ul>
        {news ? news.articles.map((article, i) => <li key={i}>{article.title}</li>) : 'no news'}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  news: state.items.data,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(NewsList)
