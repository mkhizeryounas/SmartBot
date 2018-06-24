var data = {
    link : "href",
    title : "string",
    price : "float",
    img : "href"
}


// lamudi 

var d = Array();
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
$(".ListingCell-row").each(function() {
    d.push({
        link : $(this).find('a').prop('href'),
        title : $(this).find('.ListingCell-KeyInfo-title').prop('title'),
        price : parseInt(($(this).find('.PriceSection-FirstPrice').text().replaceAll(',','')).replaceAll('Rs. ', ''))
    }) 
})
console.log(d);

// https://jageerdar.com/city/lahore/

var d = Array();
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
$(".property").each(function() {
    d.push({
        link : $(this).find('a').prop('href'),
        title : $(this).find('h3').text(),
        price : parseInt(($(this).find('.price').text().replaceAll(',','')).replaceAll('Rs.', ''))
    }) 
})
console.log(d);


// https://www.meraghar.pk/lahore/1/properties.html

var d = Array();
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
$(".classified").each(function() {
    d.push({
        link : $(this).find('.list-title a').attr('href'),
        title : $(this).find('a').text(),
        price : parseInt(($(this).find('.price').text().replaceAll(',','')).replaceAll('PKR', ''))
    }) 
})
console.log(d);