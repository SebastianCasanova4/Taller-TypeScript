import {Serie} from "./Serie.js";

export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "https://i.imgur.com/TDCEV1S.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
  ];
console.log(series);

let seriesTable = document.getElementById("id_series")!;
let promedioTable = document.getElementById("promedio")!;
let cardInfo = document.getElementById("cardInfo")!;
let botones= document.getElementsByClassName("btn")!;

mostrarDatosSeries(series);
mostrarPromedio(series);
mostrarCardSerie();

function mostrarDatosSeries(array_series: Serie[]):void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let sr of array_series){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${sr.id}</th>
        <td><input type="button" value="${sr.name}" id=${sr.id} class="btn" style="color:#FF0000;"></input></td>
        <td>${sr.canal}</td>
        <td>${sr.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function mostrarPromedio(array_series: Serie[]):void{
    let numeroTemporadas:number = 0;
    let numeroSeries:number = 0;
    for(let sr of array_series){
        numeroTemporadas += sr.temporadas;
        numeroSeries++;
    }
    let promedio:number = numeroTemporadas/numeroSeries;
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Seasons avarege: </b></td><td>${promedio}</td>`;
    promedioTable.appendChild(trElement);
}

function mostrarCardSerie():void{    
    for (var i = 0; i < botones.length; i++) 
        {
            let btn: HTMLElement = document.getElementById(botones[i].id)!;
            let sr: Serie = series[Number(botones[i].id)-1];
            let element =   `<img class="card-img-top" src="${sr.imagen}" alt="Card image cap">
                    <div class="card-body">
                    <h5>${sr.name}</h5>
                    <p class="card-text">${sr.descripcion}\n</p>
                    <p class="card-text" style="color:#FF0000;">${sr.enlace}</p>
                    </div>`
            btn.addEventListener("click", (e:Event) => cardInfo.innerHTML = element);
        }
}

