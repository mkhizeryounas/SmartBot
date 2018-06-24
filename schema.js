var data = {
    link : "href",
    title : "string",
    price : "float",
    img : "href"
}

// https://console.dialogflow.com/api-client/demo/embedded/4e4d97c6-48e7-4ef2-b6e0-f8a0ba56c18b/demoQuery?q=i%20want%20to%20purchase&sessionId=00098425-3d5e-d225-96ab-9961b0c6ff92


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