// Modules
import axios from 'axios';

// Constants
import { BASE_URL, PROFITABILITIES_URL } from './constants';

const instancePublic = axios.create({});

class ApiOrama {
  static get() {
    return instancePublic.get(`${BASE_URL}`);
  }
}
class ApiProfitabilities {
  static get() {
    return instancePublic.get(`${PROFITABILITIES_URL}`);
  }
}

export {
  ApiOrama,
  ApiProfitabilities,
};