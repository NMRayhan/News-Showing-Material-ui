import React, { useEffect, useState } from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsCenter = () => {
    const [News, setNews] = useState([])
    useEffect(() => {
        const url = 'http://newsapi.org/v2/everything?q=apple&from=2021-03-08&to=2021-03-08&sortBy=popularity&apiKey=698e8a5e7a284c499fa1a5ee648419c9'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setNews(data.articles)
            })
    }, [])
    return (
        <div className="container">
            <div div className="row align-items-start" >
                {
                    News.map(Details => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <NewsArticle newsDetails={Details}></NewsArticle>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
};

export default NewsCenter;