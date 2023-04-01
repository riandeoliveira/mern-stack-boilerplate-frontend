import {
  Injectable,
  type INestApplication,
  type OnModuleInit,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  public async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  public enableShutdownHooks(app: INestApplication): void {
    this.$on("beforeExit", async (): Promise<void> => {
      await app.close();
    });
  }
}
