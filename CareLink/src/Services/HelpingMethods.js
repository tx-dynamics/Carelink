import ImageCropPicker from "react-native-image-crop-picker"
import { heightPixel, widthPixel } from "../Constants"

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
export const uploadmageState = (setPic, setUpload, setVisible, height) => {
    ImageCropPicker.openPicker({
        width: widthPixel(414),
        height: height ? height : heightPixel(360),
        cropping: true
    }).then(image => {
        setUpload(true)
        setVisible(false)
        setPic(image?.path)
    }).catch(e => console.log(e));
}
export const uploadmageCamState = (setPic, setUpload, setVisible, height) => {
    ImageCropPicker.openCamera({
        width: widthPixel(414),
        height: height ? height : heightPixel(360),
        cropping: true
    }).then(image => {
        setUpload(true)
        setVisible(false)
        setPic(image?.path)
    }).catch(e => console.log(e));
}
export const uploadmage = (setPic) => {
    ImageCropPicker.openPicker({
        width: 400,
        height: 200,
        cropping: true,
    }).then(image => {
        setPic(image?.path)
    }).catch(e => console.log(e));
}