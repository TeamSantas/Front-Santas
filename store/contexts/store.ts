class JwtTokenStoreClass {
  private jwtToken?: string;

  public set(token: string | undefined) {
    this.jwtToken = token;
  }

  public get() {
    return this.jwtToken;
  }
}

const JwtTokenStore = new JwtTokenStoreClass();

export { JwtTokenStore };
