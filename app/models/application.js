import Model from '@ember-data/model';
import { inject as service } from '@ember/service';

export default class ApplicationModel extends Model {
  @service session;
}
