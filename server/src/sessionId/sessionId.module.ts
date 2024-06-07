import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SessionIdModuleBase } from "./base/sessionId.module.base";
import { SessionIdService } from "./sessionId.service";
import { SessionIdController } from "./sessionId.controller";
import { SessionIdResolver } from "./sessionId.resolver";

@Module({
  imports: [SessionIdModuleBase, forwardRef(() => AuthModule)],
  controllers: [SessionIdController],
  providers: [SessionIdService, SessionIdResolver],
  exports: [SessionIdService],
})
export class SessionIdModule {}
