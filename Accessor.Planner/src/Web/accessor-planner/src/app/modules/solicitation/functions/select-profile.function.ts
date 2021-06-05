import { StatusSolicitation } from "../../shared/enum/status-solicitation";
import { UserType } from "../../shared/enum/user-type";
import { SolicitationFilter } from "../model/solicitation-filter.model";

export class SelectProfile {

  

    public static selectFilterByProfile(status: StatusSolicitation, client: any, provider: any): SolicitationFilter {
        console.log(client)
        return  {
            profileContextId: client ? client.id : provider.id,
            status: status,
            userType: provider ? UserType.provider : UserType.accessor
          }
    }
}