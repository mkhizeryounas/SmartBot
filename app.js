var app = angular.module('myApp', [
    // 'ngSanitize'
]);
app.filter('html', ['$sce', function ($sce) { 
    return function (text) {
        return $sce.trustAsHtml(text);
    };    
}])
app.controller('myCtrl', function($scope, $http, $sce) {
    let getLink = (q) => {
        q = encodeURI(q);
        let a =  encodeURI(`https://console.dialogflow.com/api-client/demo/embedded/4e4d97c6-48e7-4ef2-b6e0-f8a0ba56c18b/demoQuery?q=${q}&sessionId=00098425-3d5e-d225-96ab-9961b0c6ff92`);
        console.log(a);
        return a;
    }
    $scope.q = "";
    $scope.chat = Array();
    $scope.go = (q) => {
        $("#inp").prop('disabled', true);
        let query = getLink(q);
        $scope.chat.push({
            text: q,
            source: "man"
        });
        $http.get(`./bridge.php?q=${encodeURI(query)}`).then(function(res) {
            console.log(res.data);
            $scope.chat.push({
                text: (res.data.result.fulfillment.speech).replace(/\\n/g, '<br><br><br>'),
                source: "bot"
            });
            $scope.q = "";
            setTimeout(()=> {
                var objDiv = document.getElementById("chatboxes");
                objDiv.scrollTop = objDiv.scrollHeight;
                $("#inp").prop('disabled', false);
                $("#inp").focus();

            }, 500)
        })
    }
    $scope.to_trusted = function(html_code) {
        return $sce.trustAsHtml(html_code);
    }
});