//the basic model on how a single workout should construct
class Workout {
    constructor(id, creatorId, title, imageUrl, description) {
        this.id = id;
        this.creatorId = creatorId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}

export default Workout