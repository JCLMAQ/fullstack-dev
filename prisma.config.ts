import path from "node:path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: path.join("libs/database/prisma/src/lib/", "schema.prisma"),
  migrations: {
    path: path.join("db", "migrations"),
  },
  // views: {
  //   path: path.join("db", "views"),
  // },
  // typedSql: {
  //   path: path.join("db", "queries"),
  // }
});
