import {MyShow} from './custom-attributes/my-show';
import {MyEcho} from './custom-elements/my-echo';

function configure(config) {
  config.globalResources(
    './custom-attributes/my-show',
    './custom-elements/my-echo'
  );
}

export {
  MyShow,
  MyEcho
};
