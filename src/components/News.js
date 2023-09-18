// 

// ->This is enhanced code

import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      
    };
  }

  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=e25015f2235c44d49ad01a2e86e2f570&page=1";
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let parsedData = await response.json();
      this.setState({ articles: parsedData.articles, loading: false });
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  }

  HandleNextBtn = async () => {
    console.log("N");

    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e25015f2235c44d49ad01a2e86e2f570&page=${this.state.page + 1}`;
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let parsedData = await response.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
}
HandlePrevBtn = async () => {
  console.log("P");

  try {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e25015f2235c44d49ad01a2e86e2f570&page=${this.state.page -1 }`;
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let parsedData = await response.json();
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles,
    });
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}




  render() {
    const { articles, loading } = this.state;

    return (
      <div className="container my-4">
        <h3 className="text-center">ShawtyNews - Top Headlines</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row my-4">
            {articles.map((article, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={article.title ? article.title.slice(0, 50) : ""}
                  description={article.description ? article.description.slice(0, 90) : ""}
                  imageUrl={article.urlToImage}
                  url={article.url}
                />
              </div>
            ))}
          </div>
        )}
        <div className="container d-flex justify-content-between">
          <button disabled = {this.state.page<=1}type="button" className="btn btn-dark" onClick={this.HandlePrevBtn}>
           &larr; Previous
          </button>
          <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.HandleNextBtn}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
