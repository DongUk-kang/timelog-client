import Service from "./SeviceApi";

class UserService extends Service {
  getUser() {
    return this.get("/user");
  }

  deleteUser() {
    return this.delete("/user");
  }

  postUser() {
    return this.post("/user");
  }

  putUser() {
    return this.put("/user");
  }
}

export default new UserService();
