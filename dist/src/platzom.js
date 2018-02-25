'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    // De este modo, al momento de importar la librería en otro proyecto sera de la forma: import platzom from ‘platzom\'

    var translation = str;

    /*Si la palabra original es un palíndromo, ninguna regla anterior se cuenta y se devuelve la misma palabra 
    intercalando mayúsculas y minúsculas*/

    var reverse = function reverse(str) {
        return str.toLowerCase().split('').reverse().join('');
    };

    function minMay(str) {
        var length = str.length; //longitud
        var translation = '';
        var capitalize = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }

    // Si la palabra termina en "AR", se le quitan esos dos caracteres.
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }
    // Si la palabra inicia con z se le añade p al final.
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }
    // Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio
    var length = translation.length;
    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));
        translation = firstHalf + '-' + secondHalf;
    }

    return translation;
}