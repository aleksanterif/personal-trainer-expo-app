import moment from 'moment'

class Session {
    constructor(id, workouts, date) {
        this.id = id;
        this.workouts = workouts;
        this.date = date;
    }
    //date had to be formatted inorder to get it rendered
    get formattedDate() {
        return moment.utc(this.date).format('"hh:mm DD.MM.YYYY"')
    }

}

export default Session