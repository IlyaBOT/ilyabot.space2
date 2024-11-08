function hideDirectChildDivs(parentId) {
    const parent = document.getElementById(parentId);

    if (parent) {
        const childDivs = parent.querySelectorAll(":scope > div");

        childDivs.forEach((div) => {
            div.style.display = "none";
        });
    }
}

function switchTo(toI, getTab) {
    hideDirectChildDivs("mainDIV");
    window.history.replaceState(null, '', './index.html?p='+toI);

    switch (toI) {
        case 0:
            var divTo = "homeDIV"
            if (getTab != null && getTab == true){ return divTo } else {
                document.getElementById(divTo).style.display = "block";
            }
            break;
        case 1:
            var divTo = "projectsDIV"
            if (getTab != null && getTab == true){ return divTo } else {
                document.getElementById(divTo).style.display = "block";
            }
            break;
        case 2:
            var divTo = "photoBlogDIV"
            if (getTab != null && getTab == true){ return divTo } else {
                document.getElementById(divTo).style.display = "block";
            }
            break;
        case 3:
            var divTo = "essay1DIV"
            if (getTab != null && getTab == true){ return divTo } else {
                document.getElementById(divTo).style.display = "block";
            }
            break;
        case 4:
            var divTo = "essay2DIV"
            if (getTab != null && getTab == true){ return divTo } else {
                document.getElementById(divTo).style.display = "block";
            }
            break;
        case 5:
            var divTo = "essay3DIV"
            if (getTab != null && getTab == true){ return divTo } else {
                document.getElementById(divTo).style.display = "block";
            }
            break;
        case 6:
            var divTo = "jsFormulaDIV"
            if (getTab != null && getTab == true){ return divTo } else {
                document.getElementById(divTo).style.display = "block";
            }
            break;
        default:
            var divTo = "Invalid"
            if (getTab != null && getTab == true){ return divTo } else {
                switchTo(0);
            }
    }
}