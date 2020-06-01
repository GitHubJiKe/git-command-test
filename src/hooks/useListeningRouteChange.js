import { useHistory } from "react-router-dom";
import appStore from "../store/appStore";

export default function useListeningRouteChange() {
  const history = useHistory();
  history.listen((location, _operate) => {
    appStore.setIsHomePage(location.pathname === "/");
  });
}
