import ThemeProvider from "./theme/ThemeProvider";
import SettingsSelector from "./stories/SettingsSelector";

function App() {
	return (
		<ThemeProvider>
			<SettingsSelector />
		</ThemeProvider>
	);
}

export default App;
