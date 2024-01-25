// Api
import { ApiProfitabilities } from '../utils/api';

class ProfitabilitiesService {
    static listProfitabilities() {
        return ApiProfitabilities.get();
    }
}

export default ProfitabilitiesService;
