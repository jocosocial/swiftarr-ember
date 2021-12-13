import ApplicationAdapter from './application';

export default class DailyThemeAdapter extends ApplicationAdapter {
  urlForFindAll(modelName, snapshot) {
    return `${this.urlPrefix()}/notification/dailythemes`;
  }
}
