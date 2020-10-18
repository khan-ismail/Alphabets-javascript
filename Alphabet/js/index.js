var numberOfLetterButton = document.querySelectorAll('.alphabet').length;

for (var i=0 ; i<numberOfLetterButton ; i++){
    document.querySelectorAll('.alphabet')[i].addEventListener('click', function(){
        var htmlButton = this.innerHTML;
        console.log(htmlButton);

        switch(htmlButton){
            case 'A':
                var aForApplet = new Audio('sounds/a.mp3');
                aForApplet.play();
                break;
            
            case 'B':
                var bForBall = new Audio('sounds/b.mp3');
                bForBall.play();
                break;

            case 'C':
                var cForCat = new Audio('sounds/c.mp3');
                cForCat.play();
                break;
                
            case 'D':
                var dForDog = new Audio('sounds/d.mp3');
                dForDog.play();
                break;

            case 'E':
                var eForEgg = new Audio('sounds/e.mp3');
                eForEgg.play();
                break;

            case 'F':
                var fForFish = new Audio('sounds/f.mp3');
                fForFish.play();
                break;

            case 'G':
                var gForGa = new Audio('sounds/g.mp3');
                gForGa.play();
                break;

            case 'H':
                var hForHand = new Audio('sounds/h.mp3');
                hForHand.play();
                break;

            case 'I':
                var iForIce = new Audio('sounds/i.mp3');
                iForIce.play();
                break;

            case 'J':
                var jForJug = new Audio('sounds/j.mp3');
                jForJug.play();
                break;

            case 'K':
                var kForKite = new Audio('sounds/k.mp3');
                kForKite.play();
                break;

            case 'L':
                var lForLion = new Audio('sounds/l.mp3');
                lForLion.play();
                break;

            case 'M':
                var mForMan = new Audio('sounds/m.mp3');
                mForMan.play();
                break;

            case 'N':
                var nForNest = new Audio('sounds/n.mp3');
                nForNest.play();
                break;

            case 'O':
                var oForOwen = new Audio('sounds/o.mp3');
                oForOwen.play();
                break;

            case 'P':
                var pForPie = new Audio('sounds/p.mp3');
                pForPie.play();
                break;

            case 'Q':
                var qForQueen = new Audio('sounds/q.mp3');
                qForQueen.play();
                break;

            case 'R':
                var rForRoad = new Audio('sounds/r.mp3');
                rForRoad.play();
                break;

            case 'S':
                var sForSun = new Audio('sounds/s.mp3');
                sForSun.play();
                break;

            case 'T':
                var tForTuck = new Audio('sounds/t.mp3');
                tForTuck.play();
                break;

            case 'U':
                var uForUnion = new Audio('sounds/u.mp3');
                uForUnion.play();
                break;
            
            case 'V':
                var vForVan = new Audio('sounds/v.mp3');
                vForVan.play();
                break;

            case 'W':
                var wForWall = new Audio('sounds/w.mp3');
                wForWall.play();
                break;

            case 'X':
                var xForX = new Audio('sounds/x.mp3');
                xForX.play();
                break;

            case 'Y':
                var yForYak = new Audio('sounds/y.mp3');
                yForYak.play();
                break;

            case 'Z':
                var zForZeb = new Audio('sounds/z.mp3');
                zForZeb.play();
                break; 

        }
    });
}