function home()
{
    window.location="index.html";
}
function playzone()
{
    window.location="play.html";
}
function storyzone()
{
    window.location="story.html";
}
function rhymezone()
{
    window.location="rhyme.html";
}
function studyzone()
{
    window.location="study.html";
}
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(width<992)
{
    document.getElementById("f1").width=newwidth;
    document.getElementById("f1").height=newheight;
}