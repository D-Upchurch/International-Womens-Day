let finalResponse = []

const getWomenData = () => {
    return fetch("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
    .then(response => response.json())
    .then(parsedResponse => finalResponse = parsedResponse)
}

const womenInvention = (inventionObj) => {
    return `
    <section>
    <div>
    <h2>Inventor: ${inventionObj.inventor}</h2>
    <h3>Invention: ${inventionObj.invention}</h3>
    <p>More Info: <a href="${inventionObj.moreDetails}>Click Here!</a></p> 
    </div>
    </section>
    <hr>
    `
}

const targetHTML = document.querySelector("#womenInventors")

const generateInventions = () => {
    getWomenData()
    .then(() => {
        const inventions = finalResponse
        let inventionHTML = "";
        for (const invention of inventions) {
            inventionHTML += womenInvention(invention)
        }
        targetHTML.innerHTML += inventionHTML;
        
    });
};

generateInventions();






// const womenData = getWomenData()
// .then(parsedResponse => {
//     console.log(parsedResponse);
//     return parsedResponse;
// })
// console.log("women data", womenData);