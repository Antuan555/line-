// jest.setup.js

// Импортируем jQuery и добавляем его в глобальную область видимости
const $ = require('jquery');
global.$ = global.jQuery = $;

// Импортируем Bootstrap, который будет использовать jQuery
require('bootstrap/dist/js/bootstrap.bundle.min');