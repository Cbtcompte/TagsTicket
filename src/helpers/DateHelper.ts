export const DateConvert = (date : Date) => {
    return new Date(parseInt(date?.toString())).toLocaleDateString()
}