import ActivityStore from "./activityStore";
import UserStore from "./userStore";
import CommonStore from "./commonStore";
import { createContext } from "react";
import { configure } from "mobx";

configure({ enforceActions: "always" });

export class RootStore {
  activityStore: ActivityStore;
  userStore: UserStore;
  commonStore: CommonStore;

  constructor() {
    this.activityStore = new ActivityStore(this);
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
