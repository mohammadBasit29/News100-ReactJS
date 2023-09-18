import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url} = this.props;
    return (
      <div className = "container">
         <div className="card" style={{width: "18 rem"}}>
          <img src={!imageUrl ? imageUrl="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C0%2C2000%2C1000&poi=%5B1980%2C0%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F08%2F29%2FLadies-082923.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-tsext">
              {description}
            </p>
            <a href={url} target = "_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
        
      </div>
    )
  }
}

export default NewsItem
