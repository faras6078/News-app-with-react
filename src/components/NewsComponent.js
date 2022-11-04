import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent = (props) => {
  const [articles, setarticles] = useState([]);
  const [totalResults, settotalResults] = useState(0);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);

  const capitalizeText = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // refactoring the code for better use
  const updateNews = async () => {
    props.changeProgress(10);
    setloading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    )
      .then((res) => res.json())
      .then((json) => {
        setarticles(json.articles);
        settotalResults(json.totalResults);
        setloading(false);
        props.changeProgress(50);
      });
    props.changeProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeText(props.category)}`;
    updateNews();
  }, []);

  // const handleNext = () => {
  //   setpage(page + 1);
  //   updateNews();
  // };
  // const handlePrevious = () => {
  //   setpage(page - 1);
  //   updateNews();
  // };

  const fetchMoreData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
        props.category
      }&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    )
      .then((res) => res.json())
      .then((json) => {
        setpage(page + 1);
        setarticles(articles.concat(json.articles));
        settotalResults(json.totalResults);
      });
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        NewsMonkey-Top {capitalizeText(props.category)} Headlines
      </h1>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((elm) => {
              return (
                <div className="col-md-4" key={elm.url}>
                  <NewsItems
                    imageUrl={
                      elm.urlToImage
                        ? elm.urlToImage
                        : "https://images.indianexpress.com/2022/10/Mars-Express-Phobos-image-20221031.jpg"
                    }
                    source={elm.source.name}
                    author={elm.author}
                    date={elm.publishedAt}
                    title={elm.title}
                    description={elm.description}
                    newsUrl={elm.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

NewsComponent.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

NewsComponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsComponent;
