const sequelize = require('./config/database');
const User = require('./models/User');

async function seed() {
  try {
    await sequelize.sync({ force: true }); // Drops and recreates tables

    await User.bulkCreate([
      { username: 'alice', email: 'alice@example.com' },
      { username: 'bob', email: 'bob@example.com' },
      { username: 'charlie', email: 'charlie@example.com' },
    ]);

    console.log('Seeding successful!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();