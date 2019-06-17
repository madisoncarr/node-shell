process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();

	process.stdout.write('You typed: ' + cmd);
	process.stdout.write('\nprompt > ');
});

process.stdin.on('data', (data) => {
	const pwd = data.toString().trim();

	process.stdout.write(process.cwd());
	process.stdout.write('\nprompt >');
});
