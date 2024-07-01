/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:lX34SFWLDikm@ep-calm-snowflake-a1uxm5bz.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
    }
  };