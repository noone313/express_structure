import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://postgres:baqerali123@localhost:5432/files_share');






const startServer = async () => {
    try {
      await sequelize.authenticate();
      console.log("✅ تم الاتصال بقاعدة البيانات");
  
      await sequelize.sync({ alter: true });
      console.log("🔄 تم تحديث الجداول تلقائيًا");
    } catch (error) {
      console.error("❌ خطأ فادح:", error);
      process.exit(1);
    }
  };




export { sequelize, startServer };