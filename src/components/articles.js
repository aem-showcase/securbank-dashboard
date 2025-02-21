import './articles.css';

function Articles({articles}) {

   console.log(articles);
    const aempublishurl = process.env.REACT_APP_AEM_PUBLISH;
   
    return (
        <ul className="articleList">
            {articles && articles.map((article, index) => (
                <li key={index} data-aue-resource={"urn:aemconnection:" + article._path + "/jcr:content/data/master"} data-aue-type="reference" data-aue-filter="cf">
                    <img data-aue-prop="heroImage" data-aue-type="media" className="articleImage" alt="decorative" src={aempublishurl + article.heroImage._dynamicUrl + "&width=470"} />
                    <h5 data-aue-prop="headline" data-aue-type="text" className="articleHeading">{article.headline}</h5>
                    <div data-aue-prop="main" data-aue-type="richtext" className="articleDescription">{article.main['plaintext']}</div>
                </li>
            ))}
        </ul>
    )
}

export default Articles;