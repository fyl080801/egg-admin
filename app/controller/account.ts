import { Controller } from 'egg';
import { Route, HttpPost, HttpGet } from 'egg-decorator-router';

@Route('/basic-api')
export default class AccountController extends Controller {
  @HttpPost('/login')
  public login() {
    const { ctx } = this;

    ctx.body = {
      code: 0,
      result: {
        userId: '1',
        username: 'vben',
        realName: 'Vben Admin',
        desc: 'manager',
        password: '123456',
        token: 'fakeToken1',
        roles: [
          {
            roleName: 'Super Admin',
            value: 'super',
          },
        ],
      },
      message: '',
      type: 'success',
    };
  }

  @HttpGet('/getUserInfoById')
  public getUserInfoById() {
    const { ctx } = this;

    ctx.body = {
      code: 0,
      result: {
        userId: '1',
        username: 'vben',
        realName: 'Vben Admin',
        desc: 'manager',
        password: '123456',
        token: 'fakeToken1',
        roles: [
          {
            roleName: 'Super Admin',
            value: 'super',
          },
        ],
      },
      message: '',
      type: 'success',
    };
  }
}
