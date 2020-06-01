import { observable } from "mobx";
class AppStore {
  @observable
  isHomePage = true;

  setIsHomePage(val) {
    this.isHomePage = val;
  }
}

export default new AppStore();
