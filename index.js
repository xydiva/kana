// 罗马音
let roma = [
    'a', 'i', 'u', 'e', 'o',
    'ka', 'ki', 'ku', 'ke', 'ko',
    'sa', 'shi', 'su', 'se', 'so',
    'ta', 'chi', 'tsu', 'te', 'to',
    'na', 'ni', 'nu', 'ne', 'no',
    'ha', 'hi', 'fu', 'he', 'ho',
    'ma', 'mi', 'mu', 'me', 'mo',
    'ya', 'yu', 'yo',
    'ra', 'ri', 'ru', 're', 'ro',
    'wa', 'wo',
    'n'
]
// 平假名
let hiragana = [
    'あ', 'い', 'う', 'え', 'お',
    'か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の',
    'は', 'ひ', 'ふ', 'へ', 'ほ',
    'ま', 'み', 'む', 'め', 'も',
    'や', 'ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'を',
    'ん'
]

// 片假名
let katakana = [
    'ア', 'イ', 'ウ', 'エ', 'オ',
    'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ',
    'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ',
    'ヤ', 'ユ', 'ヨ',
    'ラ', 'リ', 'ル', 'レ', 'ロ',
    'ワ', 'ヲ',
    'ン'
]

let type = 1 // 1=看音写假名 2=平假名读音 3=片假名读音

let $card = $('#card')
let $byRomaBtn = $('#byRomaBtn')
let $byHiraganaBtn = $('#byHiraganaBtn')
let $byKatakanaBtn = $('#byKatakanaBtn')
let $randomBtn = $('#randomBtn')

$card.click(function () {
    setCard()
})

$byRomaBtn.click(function () {
    type = 1
    setCur()
    setCard()
})

$byHiraganaBtn.click(function () {
    type = 2
    setCur()
    setCard()
})

$byKatakanaBtn.click(function () {
    type = 3
    setCur()
    setCard()
})

$randomBtn.click(function () {
    setCard()
})

function setCur() {
    if (type === 1) {
        $byHiraganaBtn.removeClass('cur')
        $byKatakanaBtn.removeClass('cur')
        $byRomaBtn.addClass('cur')
    }
    else if (type === 2) {
        $byRomaBtn.removeClass('cur')
        $byKatakanaBtn.removeClass('cur')
        $byHiraganaBtn.addClass('cur')
    }
    else {
        $byRomaBtn.removeClass('cur')
        $byHiraganaBtn.removeClass('cur')
        $byKatakanaBtn.addClass('cur')
    }
}

function setCard() {
    let len = roma.length
    let random = Math.floor(Math.random() * len)
    let text = ''
    if (type === 1) {
        text = roma[random]
    }
    else if (type === 2) {
        text = hiragana[random]
    }
    else {
        text = katakana[random]
    }
    $card.text(text)
}

setCur()
setCard()