class Scheduler {
    constructor(){
        this.events = []
    }

    addEvent(start_time, end_time){
        if(start_time < 0 || end_time > 23 || start_time >= end_time){
            return {
                success: false,
                message: "Invalid event times"
            }
        }

        for(const event of this.events){
            if(!(end_time <= event.start_time || start_time >= event.end_time)){
                return {
                    success: false,
                    message: "Event overlaps with an Existing event"
                }
            }
        }

        this.events.push({start_time, end_time})
        return {
            success: true,
            message: "Event added successfully"
        }
    }

    getEvents(){
        return this.events;
    }
}

module.exports = Scheduler