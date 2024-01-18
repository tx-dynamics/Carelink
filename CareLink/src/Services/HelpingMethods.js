import ImageCropPicker from "react-native-image-crop-picker"
import { widthPixel } from "../Constants"

export const uploadmage = (setPicData, picData) => {
    ImageCropPicker.openPicker({
        width: widthPixel(140),
        height: widthPixel(140),
        cropping: true
    }).then(image => setPicData([...picData, image?.path])).catch(err => console.log(err.message))
}
export const removePic = (index, setPicData, picData) => {
    picData.splice(index, 1)
    setPicData([...picData])
    console.log(picData.length)
}