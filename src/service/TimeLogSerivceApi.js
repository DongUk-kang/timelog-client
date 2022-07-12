import Service from "./SeviceApi";

class TimeLogService extends Service {
  getTimeLog() {
    return this.get("/timelog");
  }

  deleteTimeLog() {
    return this.delete("/timelog");
  }

  postTimeLog() {
    return this.post("/timelog");
  }

  putTimeLog() {
    return this.put("/timelog");
  }
}

export default new TimeLogService();
