import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SessionIdServiceBase } from "./base/sessionId.service.base";

@Injectable()
export class SessionIdService extends SessionIdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
