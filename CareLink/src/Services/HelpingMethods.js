import ImageCropPicker from "react-native-image-crop-picker"
import { widthPixel } from "../Constants"

export const uploadmageMultiPle = (setPicData, picData) => {
    let temp = [...picData]
    temp.pop()
    ImageCropPicker.openPicker({
        width: widthPixel(140),
        height: widthPixel(140),
        cropping: true
    }).then(
        // image => setPicData([...picData, { image: image?.path, add: false }]))
        // image => setPicData([...picData, { image: image?.path, add: false }]))
        image => {
            temp.push({ image: image?.path, add: false })
            temp.push({ image: "", add: true })
            setPicData(temp)
        })
        .catch(err => console.log(err.message))
}
export const removePic = (index, setPicData, picData) => {
    picData.splice(index, 1)
    setPicData([...picData])
    console.log(picData.length)
}