export function translate(load) {
	let precompiled = JSON.stringify(
		load.source
		.replace(/[ \t]*\/\/.*\n/g, '')
		.replace(/[ \t]*\/\*[\s\S]*?\*\//g, '')
		.replace(/\n{2,}/g, '\n')
	);

	let output = `export default ${precompiled};`;

	load.source = output;
	return output;
}

