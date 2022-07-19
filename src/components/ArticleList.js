import React from 'react';
import Article from './Article';

// const renderArticles = (articles) => {
//   return articles.map( article => {
//     return <Article
//       key={ article.id }
//       title={ article.title }
//       date={ article.date }
//       preview={ article.preview }
//     />
//   })
// }

const ArticleList = ({ posts }) => {
  const renderArticles = () => {
    return posts.map( article => {
      return <Article
        key={ article.id }
        title={ article.title }
        date={ article.date }
        preview={ article.preview }
      />
    })
  }

  return (
    <main>
      { renderArticles() }
    </main>
  )
}

export default ArticleList;