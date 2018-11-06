// Apply changes recursively changes/adds properties to an object
// Properties starting with '_' are considered private and ignored

export default function apply_changes(obj, changes) {
    for (let [key, value] of Object.entries(changes)) {
        if (key.startsWith('_')) continue
        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                obj[key] = value
            } else { // Assume value is an object
                if (!obj.hasOwnProperty(key)) obj[key] = {}
                apply_changes(obj[key], value)
            }
        } else {
            obj[key] = value
        }
    }

    return obj
}