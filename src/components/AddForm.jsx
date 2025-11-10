export default function AddForm({
	articles,
	setArticles,
	newArticle,
	setNewArticle,
	children,
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
		<form onSubmit={(e) => handleAddArticle(e)}>
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
			<button type="submit">{children}</button>
		</form>
	);
}
