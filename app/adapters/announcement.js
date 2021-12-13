import ApplicationAdapter from './application';

export default class AnnouncementAdapter extends ApplicationAdapter {
  urlForFindAll(modelName, snapshot) {
    return `${this.urlPrefix()}/notification/announcements`;
  }
}
