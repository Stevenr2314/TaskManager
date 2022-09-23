export default function pushToStateArray(array, value) {
    let copyArray = [...array]
    copyArray.push(value)
    return copyArray
}