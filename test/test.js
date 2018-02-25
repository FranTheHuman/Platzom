const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {

    it('Si la palabra termina con "ar", se le quitan esas dos letras', function (){
        const translation = platzom("Programar")
        expect(translation).to.equal("Program")
    })
    it('Si la palabra inicia con Z, se le añade "pe" al final', function (){
        const translation = platzom("Zorro")
        const translation2 = platzom("Zarpar")

        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })
    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function (){
        const translation = platzom("Abecedario")
        expect(translation).to.equal("Abece-dario") 
    })
    it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function (){
        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})