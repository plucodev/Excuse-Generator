    let who = ['The dog','My granma','His turtle','My bird'];
    let verb = ['eat','pissed','crushed','broked'];
    let what = ['my homework', 'my pants', 'my shoes', 'my car']
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    
    function excuseGenerator(){
        let excuseGeneratorArray = []
        let randomItemWho = who[Math.floor(Math.random()*who.length-1)];
            excuseGeneratorArray.push(randomItemWho)
        let randomItemVerb = verb[Math.floor(Math.random()*verb.length-1)];
            excuseGeneratorArray.push(randomItemVerb)
        let randomItemWhat = what[Math.floor(Math.random()*what.length-1)];
            excuseGeneratorArray.push(randomItemWhat)
        let randomItemWhen = when[Math.floor(Math.random()*when.length-1)];
            excuseGeneratorArray.push(randomItemWhen)
        let excuseText = excuseGeneratorArray[0] + " " + excuseGeneratorArray[1] + " " + excuseGeneratorArray[2] + " " + excuseGeneratorArray[3]
        
        document.getElementById("excuse-text").innerHTML = excuseText;
        return excuseText

    }
    
    
