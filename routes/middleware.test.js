const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

describe('isLoggedIn', () => {
	test('로그인 되어 있으면 isLoggIn이 next를 호출해야 함', () => {});
	test('로그인 되어 있지 않으면 isLoggedIn이 Error를 응답해야 함', () => {});
});

describe('isNotLoggedIn', () => {
	test('로그인 되어 있으면 isNotLoggedIn이 Error를 응답해야 함', () => {});
	test('로그인 되어 있지 않으면 isNotLoggedIn이 next를 호출해야 함', () => {});
});
