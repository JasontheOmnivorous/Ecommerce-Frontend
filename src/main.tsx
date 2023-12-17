import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./approute/AppRouter.tsx";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <AppRouter />
    </Provider>
);
