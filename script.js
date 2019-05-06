    let who = ['The dog','My granma','His turtle','My bird'];
    let verb = ['eat','pissed','crushed','broked'];
    let what = ['my homework', 'my pants', 'my shoes', 'my car']
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    function randomN(arr){
        return arr[Math.floor(Math.random()*arr.length)];
    }
    function excuseGenerator(){
        let randomItemWho = randomN(who);
        let randomItemVerb = randomN(verb);
        let randomItemWhat = randomN(what);
        let randomItemWhen = randomN(when);
        document.getElementById("excuse-text").innerHTML = randomItemWho + " " + randomItemVerb + " " + randomItemWhat + " " + randomItemWhen;

        return excuseText
    }


