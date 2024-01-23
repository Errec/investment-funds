// Api
import { ApiOrama } from '../utils/api';

class FundsService {
    static listFunds() {
        return ApiOrama.get();
    }
}

export default FundsService;
