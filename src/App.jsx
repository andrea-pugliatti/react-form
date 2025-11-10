import { useState } from "react";
import Article from "./components/Article";
import Form from "./components/Form";

function App() {
	const articleList = [
		{
			id: 1,
			title: "Il Magico Mondo",
			article:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias eveniet amet aut. Odio laboriosam cupiditate natus temporibus qui modi minus, itaque sit! A, doloribus. Modi velit consectetur sunt optio.",
		},
		{
			id: 2,
			title: "Dei cassetti e altre cose",
			article:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias eveniet amet aut. Odio laboriosam cupiditate natus temporibus qui modi minus, itaque sit! A, doloribus. Modi velit consectetur sunt optio.",
		},
		{
			id: 3,
			title: "Come evitare oggetti in volo",
			article:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias eveniet amet aut. Odio laboriosam cupiditate natus temporibus qui modi minus, itaque sit! A, doloribus. Modi velit consectetur sunt optio.",
		},
		{
			id: 4,
			title: "Come fare ad arrivare a fine corso",
			article:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias eveniet amet aut. Odio laboriosam cupiditate natus temporibus qui modi minus, itaque sit! A, doloribus. Modi velit consectetur sunt optio.",
		},
	];

	const emptyArticle = {
		id: 0,
		title: "",
		article: "",
	};

	const [articles, setArticles] = useState(articleList);
	const [newArticle, setNewArticle] = useState(emptyArticle);

	return (
		<div className="container">
			<h1>React Blog</h1>
			<Form
				articles={articles}
				setArticles={setArticles}
				newArticle={newArticle}
				setNewArticle={setNewArticle}
			/>

			<ul className="article-list">
				{articles.map((item, index) => (
					<Article
						key={`${index}-${item.title}`}
						articles={articles}
						setArticles={setArticles}
						item={item}
						index={index}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;
