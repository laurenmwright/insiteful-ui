import { BrowserRouter, Routes, Route } from "react-router-dom"

import "regenerator-runtime"

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

function Home() {
	return <div className="grid h-screen place-items-center" />
}
