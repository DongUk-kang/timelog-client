import Service from "./SeviceApi";

class PlaceService extends Service {
  getPlaces() {
    return this.get("/place");
  }

  deletePlaces() {
    return this.delete("/place");
  }

  postPlaces() {
    return this.post("/place");
  }

  putPlaces() {
    return this.post("/place");
  }
}

export default new PlaceService();
