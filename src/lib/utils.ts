export const capitalize = (s: string): string => {
    if (typeof s !== "string" || s.length === 0) {
        return s
    }

    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const formatDate = (d: Date): string => {
    let options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    return new Date(d).toLocaleDateString(undefined, options)
}
