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
		console.log(`Added: ${newArticle}`);
	};

	const handleRemoveArticle = (index) => {
		const updatedList = articles.filter((_, articleIndex) => {
			return articleIndex !== index;
		});

		setArticles(updatedList);
		console.log(`Removed successfully!`);
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
						<button type="submit" onClick={() => handleRemoveArticle(index)}>
							{/* I don't want to install bootstrap icons for a single icon */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-trash"
								viewBox="0 0 16 16"
							>
								<title>Remove</title>
								<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
								<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
							</svg>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
