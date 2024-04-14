export default async function Home() {
	const response = await fetch("http://localhost:3000/api/actions", {
		cache: "no-cache",
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h3 className="text-2xl font-semibold leading-none tracking-tight">
				プロジェクト
			</h3>
		</main>
	);
}
