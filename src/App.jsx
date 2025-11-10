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

	const emptyArticle = {
		id: 0,
		title: "",
		article: "",
	};

	const [articles, setArticles] = useState(articleList);
	const [newArticle, setNewArticle] = useState(emptyArticle);

	const handleAddArticle = (event) => {
		event.preventDefault();
		const updatedList = [...articles, newArticle];
		setArticles(updatedList);
		console.log(`Added task: ${newArticle}`);
		console.log(event);
	};

	return (
		<div className="container">
			<h1>React Blog</h1>

			<form onSubmit={handleAddArticle} className="add-article">
				<input
					type="text"
					value={newArticle.title}
					onChange={(event) =>
						setNewArticle({
							id: articles.length + 1,
							title: event.target.value,
							article: "Lorem ipsum",
						})
					}
				/>
				<button type="submit">Aggiungi</button>
			</form>

			<ul className="article-list">
				{articles.map((item, index) => (
					<li className="article-title" key={`${index}-${item.title}`}>
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
