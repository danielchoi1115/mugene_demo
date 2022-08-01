export function toRelativeTimeString(date){
    const timestamp = date.getTime();
    const seconds = timestamp
    const currentTimestamp = (new Date()).getTime();
    const difference = Math.floor((currentTimestamp - seconds)/1000);
    
    if (difference < 0) {
        return `conversion error, time differece is negative`;
    }
    // var plural = ((a < b) ? 'minor' : 'major')
    if (difference < 5) {
        // Less than a minute has passed:
        return `just now`;
    }
    else if (difference < 60) {
        // Less than a minute has passed:
        return `${difference} seconds ago`;
    } else if (difference < 3600) {
        // Less than an hour has passed:
        return `${Math.floor(difference / 60)} minutes ago`;
    } else if (difference < 86400) {
        // Less than a day has passed:
        return `${Math.floor(difference / 3600)} hours ago`;
    } else if (difference < 2620800) {
        // Less than a month has passed:
        return `${Math.floor(difference / 86400)} days ago`;
    } else if (difference < 31449600) {
        // Less than a year has passed:
        return `${Math.floor(difference / 2620800)} months ago`;
    } else {
        // More than a year has passed:
        return `${Math.floor(difference / 31449600)} years ago`;
    }
}

export function statusToString(status) {
    if (status === "pending") {
        return "Pending"
    }
    else if (status === "in_progress") {
        return "In Progress"
    }
    else if (status === "error") {
        return "Error"
    }
    else if (status === "generated") {
        return "Generated"
    }
}