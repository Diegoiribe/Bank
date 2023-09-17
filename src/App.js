import React, {
	useEffect,
	useState,
} from "react";
import GlobalStyle from "./GlobalStyled";
import Container from "./Components/Container";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import {
	temaClaro,
	temaOscuro,
} from "./Components/UI/temas";
import { BtnTemas } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
	const [tema, setTema] = React.useState(
		JSON.parse(
			localStorage.getItem("tema")
		)
	);

	const toggleTema = () => {
		setTema((tema) => !tema);
	};

	const handleSaveToLocalStorage =
		() => {
			localStorage.setItem(
				"tema",
				JSON.stringify(tema)
			);
		};

	useEffect(() => {
		handleSaveToLocalStorage();
	}, [tema]);

	return (
		<ThemeProvider
			theme={tema ? temaClaro : temaOscuro}
		>
			<GlobalStyle />
			<BtnTemas onClick={toggleTema}>
				<SwitcherTema tema={tema} />
			</BtnTemas>
			<Header />
			<Container />
		</ThemeProvider>
	);
}

export default App;
