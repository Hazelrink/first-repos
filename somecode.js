//На основе массива [1,2,3,5,8,9,10] сформировать новый массив,каждый элемент которого будет хранить информацию о числе и его четности:
var arr = [1,2,3,5,8,9,10];
var new_arr = [];

arr.forEach(function(item) {
    if(item % 2 == 0) {
        new_arr.push(
            {
                digit : item,
                odd: true
            }
        );
    }
    else {
        new_arr.push(
            {
                digit : item,
                odd: false
            }
        );
    }
});
alert(new_arr);
//На основе массива [1,2,3,5,8,9,10] сформировать новый массив,каждый элемент которого будет хранить информацию о числе и его четности:


//Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы,равные нулю. Если да - вернуть false
function zero(arr) {
    arr.some(function(item){
        if(item == 0) {
            return false;
        }
    })
}
zero([12, 4, 50, 1, 0, 18, 40]);
//Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы,равные нулю. Если да - вернуть false



//Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
function strCheck(arr) {
    arr.some(function(item){
        if(item.length > 3) {
            alert(item);
            return true;
        }
    })
}
strCheck(['yes', 'hello', 'no', 'easycode', 'what']);
//Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true



// Дан массив объектов, где каждый объект содержит информацию обукве и месте её положения в строке {буква: “a”, позиция_в_предложении:1}:
var arr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];
var temp_arr = [];
arr.forEach(function(item){
    temp_arr[item.index] = item.char;
});
temp_arr = temp_arr.join('');
console.log(temp_arr);
// Дан массив объектов, где каждый объект содержит информацию обукве и месте её положения в строке {буква: “a”, позиция_в_предложении:1}: