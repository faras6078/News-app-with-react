import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="container mx-2 my-3">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
            <br />
            <span className="badge bg-secondary">{source}</span>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
          <p className="card-text">
            <small className="text-muted">
              {!author ? "unknown" : author} At {new Date(date).toDateString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
