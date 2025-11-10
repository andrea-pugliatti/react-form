export default function UpdateForm({
	articles,
	setArticles,
	newArticle,
	setNewArticle,
	index,
	setIsUpdating,
	children,
}) {
	const handleUpdateArticle = (event) => {
		event.preventDefault();

		if (newArticle.title.length > 3) {
			const updatedList = articles.map((article, articleIndex) => {
				return articleIndex !== index
					? article
					: {
							id: article.id,
							title: newArticle.title,
							article: article.article,
						};
			});

			setArticles(updatedList);
			setIsUpdating(false);
		}

		setNewArticle({
			id: 0,
			title: "",
			article: "",
		});
	};

	return (
		<form onSubmit={handleUpdateArticle}>
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
