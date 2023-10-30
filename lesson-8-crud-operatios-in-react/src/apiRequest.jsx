const apiRequest = async (url = "", optionObject = null, errMsg = null) => {

    try {
        const response = await fetch(url, optionObject);
        if(!response.ok) throw Error('Please reload the app again')

    } catch (err) {
        errMsg = err.message
    } finally {
        return errMsg
    }
}

export default apiRequest