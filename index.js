let roma = [
    'a', 'i', 'u', 'e', 'o',
    'ka', 'ki', 'ku', 'ke', 'ko',
    'sa', 'shi', 'su', 'se', 'so',
    'ta', 'chi', 'tu', 'te', 'to',
    'na', 'ni', 'nu', 'ne', 'no',
    'ha', 'hi', 'hu', 'he', 'ho',
    'ma', 'mi', 'mu', 'me', 'mo',
    'ya', 'yu', 'yo',
    'ra', 'ri', 'ru', 're', 'ro',
    'wa', 'wo',
    'n'
]
let hiragana = [
    'あ', 'い', 'う', 'え', 'お',
    'か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の',
    'ま', 'み', 'む', 'め', 'も',
    'や', 'ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'を',
    'ん'
]

let type = 1

let $card = $('#card')
let $byRomaBtn = $('#byRomaBtn')
let $byKanaBtn = $('#byKanaBtn')
let $randomBtn = $('#randomBtn')

$card.click(function () {
    setCard()
})

$byRomaBtn.click(function () {
    type = 1
    setCur()
    setCard()
})

$byKanaBtn.click(function () {
    type = 2
    setCur()
    setCard()
})

$randomBtn.click(function () {
    setCard()
})

function setCur() {
    if (type === 1) {
        $byKanaBtn.removeClass('cur')
        $byRomaBtn.addClass('cur')
    }
    else {
        $byRomaBtn.removeClass('cur')
        $byKanaBtn.addClass('cur')
    }
}

function setCard() {
    let len = type === 1 ? roma.length : hiragana.length
    let random = Math.floor(Math.random() * len)
    $card.text(type === 1 ? roma[random] : hiragana[random])
}

setCur()
setCard()