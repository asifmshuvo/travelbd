import { message } from 'antd'


export const successMessage = (msg) => {
    message.success(msg || "Data Updated Successfully!")
}

export const errorMessage = (error,) => {
    console.error(error)
    message.error("Error occured! Please try again.")
}

