document.addEventListener('DOMContentLoaded', function () {
    const hueInput = document.getElementById('hue')
    const saturationInput = document.getElementById('saturation')
    const lightnessInput = document.getElementById('lightness')





    const hueValue = document.getElementById('hueValue')
    const saturationValue = document.getElementById('saturationValue')
    const lightnessValue = document.getElementById('lightnessValue')





    const colorDisplay = document.querySelector('.color-display')
    const copyButton = document.getElementById('copyButton')



    hueInput.addEventListener('input', updateColor)
    saturationInput.addEventListener('input', updateColor)
    lightnessInput.addEventListener('input', updateColor)


    function updateColor() {
        const hue = hueInput.value
        const saturation = saturationInput.value
        const lightness = lightnessInput.value


        const final_color = `hsl(${hue} , ${saturation}% , ${lightness}%)`
        colorDisplay.style.backgroundColor = final_color
        console.log(final_color)
        colorDisplay.style.border = '3px solid black'

        hueValue.textContent = hue
        saturationValue.textContent = saturation
        hueValue.textContent = lightness
    }




    document.getElementById('copyButton').addEventListener('click', copyToClipBoard)



    function copyToClipBoard() {
        const textToCopy = `hsl(${hue} , ${saturation}% , ${lightness}%)`
        navigator.clipboard.writeText(textToCopy).then(function () {


            alert("Successfully copied to clipboard")


        }).catch(function (err) {

            alert("Unable to Catch the error", err)
        })
    }



















})