export default function Form({
	articles,
	setArticles,
	newArticle,
	setNewArticle,
}) {
	const handleAddArticle = (event) => {
		event.preventDefault();

		if (newArticle.title.length > 3) {
			const updatedList = [...articles, newArticle];
			setArticles(updatedList);
		}

		setNewArticle({
			id: 0,
			title: "",
			article: "",
		});
	};

	return (
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
	);
}
