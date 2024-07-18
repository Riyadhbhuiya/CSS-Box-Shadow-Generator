console.log("Alive!")

function cssUpdate() {
    //slider values
    //Horizontal Shadow
    const horizontal = document.getElementById("horizontal");
    const hlabel = document.getElementById("hlabel");
    hlabel.innerText = `Horizontal Shadow: ${horizontal.value}px`;
    //Vertical Shadow
    const vertical = document.getElementById("vertical");
    const vlabel = document.getElementById("vlabel");
    vlabel.innerText = `Vertical Shadow: ${vertical.value}px`;

    //Blur Radius
    const blur = document.getElementById("blur");
    const blurlabel = document.getElementById("blurlabel");
    blurlabel.innerText = `Blur Radius: ${blur.value}px`;

    //Spread Radius
    const spread = document.getElementById("spread");
    const slabel = document.getElementById("slabel");
    slabel.innerText = `Spread Radius: ${spread.value}px`;

    //Shadow Color
    const color = document.getElementById("color");
    const clabel = document.getElementById("clabel");
    clabel.innerText = `Shadow Color: ${color.value}`;

    //Shadow Color Opacity
    let opacity = document.getElementById("opacity");
    const olabel = document.getElementById("olabel");
    //hex to rgb
    let hex = parseInt(opacity.value).toString(16);
    olabel.innerText = `Shadow Color Opacity: ${hex}`;
    //slider values


    //output CSS

    const css = document.getElementById("css");
    let stylevalue = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value + hex}`;

    //style the box

    const showcase = document.getElementById("showcase");

    function showcaseUpdate() {
        showcase.style.boxShadow = stylevalue;
        //console.log("ran too!")
    }

    css.innerText = "box-shadow : " + stylevalue;
    console.log("ran!")
    showcaseUpdate();
}

