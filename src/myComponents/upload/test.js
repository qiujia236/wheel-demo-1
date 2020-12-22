const delay = function delay(interval) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(interval)
        }, interval);
    })
}

let tasks = [
    () => { return delay(1000) },
    () => { return delay(1003) },
    () => { return delay(1005) },
    () => { return delay(1002) },
    () => { return delay(1004) },
    () => { return delay(1006) }]

function createRequest(tasks, pool) {
    pool = pool || 5;
    let results = [];
    let together = new Array(pool).fill(null);
    let index = 0;
    together = together.map((item, i) => {
        return new Promise((resolve, reject) => {
            const run = function run() {
                if (index >= tasks.length) {
                    resolve();
                    return;
                }
                let old_index = index;
                let task = tasks[index++];
                task().then((result) => {
                    console.log(result, i);
                    results[old_index] = result;
                    run();
                }).catch((reason) => {
                    reject(reason)
                })
            }
            run();
        })
    })
    return Promise.all(together).then(() => results)
}

createRequest(tasks, 3).then((results) => {
    console.log('success->', results);
}).catch((reason) => {
    console.log('fail->', reason);
})
