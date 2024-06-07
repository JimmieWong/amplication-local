import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SessionIdService } from "./sessionId.service";
import { SessionIdControllerBase } from "./base/sessionId.controller.base";

@swagger.ApiTags("sessionIds")
@common.Controller("sessionIds")
export class SessionIdController extends SessionIdControllerBase {
  constructor(
    protected readonly service: SessionIdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
