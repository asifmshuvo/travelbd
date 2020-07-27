//to Replace HostImageSource
export const globalStrReplace = (str, strToBeReplace, newStr) => {
    const regex = (strToBeReplace, "g")
    
    if (str) return str.replace(regex, newStr)
    else return ''
}