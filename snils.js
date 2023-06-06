// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.


// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
    let regexp = /(\d{3}).?(--)?(\d{3}).?(--)?(\d{3})[\s.]?(\d{2})/g
    return regexp.test(string)
}


// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
    let regexp = /\d{3}-\d{3}-\d{3}\s+\d{2}/
     return string.match(regexp)[0]
}

// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
    let regexp = /\d{3}-\d{3}-\d{3}\s+\d{2}/g
    return string.match(regexp)
}

//console.log(grabAllSNILS("The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"))

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
    let regexp = /\d{3}-\d{3}-\d{3}/g
    return string.replace(regexp, "XXX-XXX-XXX")
}



// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {
	let regex = /(\d{3})[\.-]*(\d{3})[\.-]*(\d{3})[\.-\s]*(\d{2})/g;
	return string.replace(regex, "$1-$2-$3 $4");
}

module.exports = {
hasSNILS,
grabSNILS,
grabAllSNILS,
hideAllSNILS,
formatSNILS
};
