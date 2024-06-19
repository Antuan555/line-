module.exports = {
	testEnvironment: 'jsdom', // Указываем jsdom как среду тестирования
	setupFilesAfterEnv: ['./jest.setup.js'], // Указываем файл для настройки среды перед тестами
};