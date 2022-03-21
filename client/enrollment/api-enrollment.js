const create = async (params, credentials) => {
    try {
        let response = await fetch('/api/enrollment/new/'+params.courseId,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (e) {console.log(e)}
}

const listEnrolled = async (credentials, signal) => {
    try {
        let response = await fetch('/api/enrollment/enrolled', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            signal: signal
        })
        return await response.json()
    } catch (e) {console.log(e)}
}

const enrollmentStats = async (params, credentials, signal) => {
    try {
        let response = await fetch('/api/enrollment/'+params.enrollmentId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (e) {console.log(e)}
}

const read = async (params, credentials, signal) => {
    try {
        let response = await('/api/enrollment/' + params.enrollmentId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ credentials.t
            }
        })
        return await response.json()
    } catch (e) {console.log(e)}
}

const complete = async (params, credentials, enrollment) => {
    try {
        let response = await fetch('/api/enrollment/complete/'+params.enrollmentId,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(enrollment)
        })
        return await response.json()
    } catch (e) {console.log(e)}
}

const remove = async (params, credentials) => {
    try {
        let response = await fetch('/api/enrollment/'+params.enrollmentId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (e) {console.log(e)}
}

export {
    create,
    read,
    complete,
    remove,
    listEnrolled,
    enrollmentStats
}