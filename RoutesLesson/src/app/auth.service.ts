export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    /*const promise = new Promise(( resolve, reject ) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });*/
    const promise = new Promise((resolve1, reject1) => {
      setTimeout(() => {
        resolve1(this.loggedIn);
      });
    });
    return promise;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
