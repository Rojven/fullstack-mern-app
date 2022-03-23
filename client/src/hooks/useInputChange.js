export const useInputChange = (inputData, setInputData) => {

    const onInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    return {onInputChange}
}
