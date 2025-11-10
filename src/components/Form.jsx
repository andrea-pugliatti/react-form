export default function Form({
	articles,
	setArticles,
	newArticle,
	setNewArticle,
	index,
	isUpdating,
	setIsUpdating,
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
		<form
			onSubmit={(e) =>
				isUpdating ? handleUpdateArticle(e) : handleAddArticle(e)
			}
		>
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
