
const menu = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self-Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

  window.addEventListener('DOMContentLoaded',function(){
    item(menu)
  })


  function item(item){
    let caixas = item.map(function(itens){
      console.log(itens)

      return`
      <div class="lr-card ${itens.title}">
      <div class="img">
        <img  class="positinimg" src="./images/icon-${itens.title}.svg" alt="">
      </div>
      <div class="works">
        <p class="title">${itens.title}</p>
        <p class="time">${itens.timeframes["weekly"].current}hrs</p>
        <p class="day">Lask Week - ${itens.timeframes["weekly"].previous}hrs</p>
      </div>
    </div>
      `
    })    

    caixas = caixas.join("")
    console.log(caixas)

    document.querySelector('.pai-caixa').innerHTML = caixas;
  }