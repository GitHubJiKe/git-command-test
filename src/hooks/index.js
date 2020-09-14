import { useState } from "react";
import { useHistory } from "react-router-dom";
import appStore from "../store/appStore";

export default class Hooks {
  static useToogle(defaultOpenvalue) {
    const [open, setOpen] = useState(defaultOpenvalue);

    return [open, setOpen];
  }

  static useListeningRouteChange() {
    const history = useHistory();
    history.listen((location, _operate) => {
      appStore.setIsHomePage(location.pathname === "/");
    });
  }
}
