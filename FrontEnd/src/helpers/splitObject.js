export const SplitObject = (obj) => {
    let arr = []
    let obj1 = {}
    let obj2 = {}

    const objectLength = Math.round(Object.keys(obj).length / 2)

    Object.entries(obj).forEach(([k, v]) => {

        if (objectLength > Object.keys(obj1).length) obj1[k] = v
        else obj2[k] = v
    })

    arr.push(obj1, obj2)
    return arr;
}


