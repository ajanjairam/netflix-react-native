import MyStack from "./src/MyStack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
