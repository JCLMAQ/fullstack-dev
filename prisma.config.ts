import "@dotenvx/dotenvx/config";
import { defineConfig, prisma7Schema } from "@prisma/orm-postgres/config";
import { definePrismaConfig } from "prisma/config";

export default definePrismaConfig({
  orm: defineConfig({
    contract: prisma7Schema("libs/prisma/src/lib/prisma/schema.prisma"),
    output: "libs/prisma/src/lib/generated/contract",
    db: {
      connection: process.env["DATABASE_URL"],
    },
  }),
});
