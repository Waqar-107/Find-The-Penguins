/**
 * Created by waqar on 3/7/2018.
 */

/**
 * decide where to put which image
 * when clicked,set the image and change css of the div
 * to acive
 */

var yetiNotFound;
var images=[];
var random_idx=[];
var done=[];

var penguin_found=0;

function newGame() {
 location.reload();
}

function init()
{
    //---------------------------------------------------------------------
    //shuffle the array random_idx, save the image names in images
    yetiNotFound=1;
    for(var i=1;i<=8;i++)
    {
        var s='penguin_pngs/penguin_'+i+'.png';
        images.push(s)
    }

    images.push('penguin_pngs/yeti');

    for(var i=0;i<9;i++)
        done[i]=0;

    var cnt=0;
    while (cnt<9)
    {
        var n=Math.floor(Math.random()*9);

        if(done[n])
            continue;

        done[n]=1;random_idx.push(n);
        cnt++;
    }
    //---------------------------------------------------------------------
}

function winner() {
    alert("perfect!!! start a new game.")
    yetiNotFound=0;
}

function gameOver(id)
{
    if(penguin_found<8)
    {
        document.getElementById(id).style.backgroundImage="url('penguin_pngs/yeti.png')";
        yetiNotFound=0;
        alert("gameover!!")
    }

    else
        winner();
}

function exe(id)
{
    var img=document.getElementById(id);
    if(id=="one" && yetiNotFound)
    {
        if(images[random_idx[0]]=='penguin_pngs/yeti')
            gameOver(id);

        else{
            img.style.backgroundImage='url("' + images[random_idx[0]] + '")';
            penguin_found++;
        }
    }

    if(id=="two" && yetiNotFound)
    {
        if(images[random_idx[1]]=='penguin_pngs/yeti')
            gameOver(id);

        else {
            img.style.backgroundImage='url("' + images[random_idx[1]] + '")';
            penguin_found++;
        }
    }

    if(id=="three" && yetiNotFound)
    {
        if(images[random_idx[2]]=='penguin_pngs/yeti')
            gameOver(id);

        else {
            img.style.backgroundImage='url("' + images[random_idx[2]] + '")';
            penguin_found++;
        }
    }

    if(id=="four" && yetiNotFound)
    {
        if(images[random_idx[3]]=='penguin_pngs/yeti')
            gameOver(id);

        else{
            img.style.backgroundImage='url("' + images[random_idx[3]] + '")';
            penguin_found++;
        }
    }

    if(id=="five" && yetiNotFound)
    {
        if(images[random_idx[4]]=='penguin_pngs/yeti')
            gameOver(id);

        else {
            img.style.backgroundImage='url("' + images[random_idx[4]] + '")';
            penguin_found++;
        }
    }

    if(id=="six" && yetiNotFound)
    {
        if(images[random_idx[5]]=='penguin_pngs/yeti')
            gameOver(id);

        else{
            img.style.backgroundImage='url("' + images[random_idx[5]] + '")';
            penguin_found++;
        }
    }

    if(id=="seven" && yetiNotFound)
    {
        if(images[random_idx[6]]=='penguin_pngs/yeti')
            gameOver(id);

        else{
            img.style.backgroundImage='url("' + images[random_idx[6]] + '")';
            penguin_found++;
        }
    }

    if(id=="eight" && yetiNotFound)
    {
        if(images[random_idx[7]]=='penguin_pngs/yeti')
            gameOver(id);

        else{
            img.style.backgroundImage='url("' + images[random_idx[7]] + '")';
            penguin_found++;
        }
    }

    if(id=="nine" && yetiNotFound)
    {
        if(images[random_idx[8]]=='penguin_pngs/yeti')
            gameOver(id);

        else{
            img.style.backgroundImage='url("' + images[random_idx[8]] + '")';
            penguin_found++;
        }
    }

    if(penguin_found==8)
        winner();
}