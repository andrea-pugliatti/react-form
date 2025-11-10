import { useState } from "react";

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
	const [articles, setArticles] = useState(articleList);
	const [newArticle, setNewArticle] = useState("");

	return (
		<div className="container">
			<h1>React Blog</h1>

			<form className="add-article">
				<input type="text" />
				<button type="submit">Aggiungi</button>
			</form>

			<ul className="article-list">
				{articleList.map((item) => (
					<li className="article-title" key={item.id}>
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
