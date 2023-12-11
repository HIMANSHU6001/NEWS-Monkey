import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source, mode } = props
  return (
    <div className='my-3'><div style={{ 'backgroundColor': `${mode === "primary" ? 'white' : '#192c43'}` }} className={`card text-${mode === "primary" ? "black" : "white"}`} >
      <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/tech/img/2023/08/31/1600x900/Apple_support_1693463180007_1693463180184.jpg"} className={`card-img-top opacity-${mode === "primary" ? "100" : "75"}`} alt="..." />
      <div className="card-body ">
        {source && <span style={{ 'right': '0px', 'top': "-10px" }} className="position-absolute badge rounded-pill bg-danger  ">
          {source}
        </span>}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className='card-text '><small className={`text-${mode === "primary" ? "dark" : "white-50 "}`}>By {author ? author : "Unkown"} on {Date(date)}</small></p>
        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
    </div>
  )
}

export default NewsItem