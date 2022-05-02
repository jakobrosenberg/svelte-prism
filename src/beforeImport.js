if (typeof window !== "undefined") {
	if (window.Prism)
		console.warn(
			"Prism has already been initiated. Please ensure that svelte-prism is imported first."
		);

	window.Prism = window.Prism || {};
	window.Prism.manual = true;
}
