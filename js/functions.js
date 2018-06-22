
/* Works Selector Script */

var wOne = document.getElementsByClassName('work-img')[0];
var wTwo = document.getElementsByClassName('work-img-2')[0];
var wThree = document.getElementsByClassName('work-img-3')[0];

/* Variables for mobile conditioning */
var browserScale;
var mobileScale;
var mobileSlide = false;

/* Dom variables to get the images */
var caseOne = document.getElementsByClassName('img-cont-1')[0];
var caseTwo = document.getElementsByClassName('img-cont-2')[0];
var caseThree = document.getElementsByClassName('img-cont-3')[0];

/* Dom variables to get the quote */
var descOne = document.getElementsByClassName('desc-1')[0];
var descTwo = document.getElementsByClassName('desc-2')[0];
var descThree = document.getElementsByClassName('desc-3')[0];

/* Dom variables to get the Names of each person */
var nameOne = document.getElementsByClassName('n-1')[0];
var nameTwo = document.getElementsByClassName('n-2')[0];
var nameThree = document.getElementsByClassName('n-3')[0];

/* Fixed values for the positioning of the images */
var jumpValOne = "250px";
var JumpValTwo = "250px";
var JumpValThree ="250px";

/* Variables for conditioning whether its active or not */
/* isCOActive is true by default */

var isCOActive = true;
var isCTActive = false;
var isCThreeActive = false;


function checkRes()
{
    var wWidth = window.innerWidth;
    if(wWidth <= 530)
    {
        browserScale = "scale(1.1)";
    }
    else if(wWidth > 530)
    {
        browserScale = "scale(1.6)";
    }
    if(wWidth <= 390)
    {
        mobileSlide = true;
        caseOne.style.margin = "0px";
        caseTwo.style.margin = "0px";
        caseThree.style.margin = "0px";
    }
    if(wWidth > 390)
    {
        mobileSlide = false;
        caseTwo.style.marginRight = "250px";
        caseThree.style.marginLeft = "250px";

        caseTwo.style.height = "100px";
        caseTwo.style.width = "100px";
        caseTwo.style.zIndex = "2";
        caseTwo.style.transform = "scale(1) rotate(45deg)";

        caseThree.style.height = "100px";
        caseThree.style.width = "100px";
        caseThree.style.zIndex = "1";
        caseThree.style.transform = "scale(1) rotate(45deg)";

        caseOne.style.margin = "0px";
        caseOne.style.height = "150px";
        caseOne.style.width = "150px";
        caseOne.style.zIndex = "3";
        caseOne.style.transform = "scale(1) rotate(45deg)";

        isCOActive = true;

        descOne.style.opacity = "1";
        descThree.style.opacity = "0";
        descTwo.style.opacity = "0";
        descOne.style.marginTop = "50px";

        nameTwo.style.opacity = "0";
        nameThree.style.opacity = "0";
        nameOne.style.opacity = "1";
    }
}

function activeOne()
{
    wOne.style.zIndex = "2";
    wOne.style.transform = browserScale;
}

function exitOne()
{
    wOne.style.zIndex = "1";
    wOne.style.transform = "scale(1)";
}

function activeTwo()
{
    wTwo.style.zIndex = "2";
    wTwo.style.transform = browserScale;
}

function exitTwo()
{
    wTwo.style.zIndex = "1";
    wTwo.style.transform = "scale(1)";
}

function activeThree()
{
    wThree.style.zIndex = "2";
    wThree.style.transform = browserScale;
}

function exitThree()
{
    wThree.style.zIndex = "0";
    wThree.style.transform = "scale(1)";
}


/* Testimonial Picker Script */
function Next()
{
    if(!mobileSlide)
    {
        if(isCOActive)
        {
            JumpValThree = "0px";
            jumpValOne = "250px"
            jumpValTwo = "250px";

            caseOne.style.marginLeft = jumpValOne;
            caseOne.style.height = "100px";
            caseOne.style.width = "100px";
            caseOne.style.zIndex = 2;

            caseThree.style.marginRight = JumpValThree;
            caseThree.style.marginLeft = "0px";
            caseThree.style.height = "150px";
            caseThree.style.width = "150px";
            caseThree.style.zIndex = 3;

            caseTwo.style.marginRight = jumpValTwo;
            caseTwo.style.height = "100px";
            caseTwo.style.width = "100px";
            caseTwo.style.zIndex = 1;

            isCThreeActive = true;
            isCOActive = false;
            isCTActive = false;

            descOne.style.opacity = "0";
            descThree.style.opacity = "1";
            descThree.style.marginTop = "-50px";
            nameOne.style.opacity = "0";
            nameThree.style.opacity = "1";
        }
        else if(isCThreeActive)
        {
            jumpValTwo = 0;
            JumpValThree ="250px";
            jumpValOne = "250px";

            caseTwo.style.marginRight = jumpValTwo;
            caseTwo.style.height = "150px";
            caseTwo.style.width = "150px";
            caseTwo.style.zIndex = 3;

            caseThree.style.marginRight = JumpValThree;
            caseThree.style.height = "100px";
            caseThree.style.width = "100px";
            caseThree.style.zIndex = 2;

            caseOne.style.marginLeft = jumpValOne;
            caseOne.style.height = "100px";
            caseOne.style.width = "100px";
            caseOne.style.zIndex = 2;
            
            isCTActive = true;
            isCThreeActive = false;
            isCOActive = false;
            
            descTwo.style.opacity = "1";
            descThree.style.opacity = "0";
            descTwo.style.marginTop = "-50px";

            nameThree.style.opacity = "0";
            nameTwo.style.opacity = "1";
        }
        else if(isCTActive)
        {
            jumpValTwo = "250px";
            JumpValThree ="250px";
            jumpValOne = "0px";
            
            caseOne.style.marginLeft = jumpValOne;
            caseOne.style.height = "150px";
            caseOne.style.width = "150px";
            caseOne.style.zIndex = 3;

            caseTwo.style.marginRight = jumpValTwo;
            caseTwo.style.height = "100px";
            caseTwo.style.width = "100px";
            caseTwo.style.zIndex = 1;

            caseThree.style.marginLeft= JumpValThree;
            caseThree.style.marginRight = "0px";
            caseThree.style.height = "100px";
            caseThree.style.width = "100px";
            caseThree.style.zIndex = 2;
            
            isCOActive = true;
            isCTActive = false;
            isCThreeActive = false;

            descOne.style.opacity = "1";
            descThree.style.opacity = "0";
            descTwo.style.opacity = "0";
            descOne.style.marginTop = "50px";

            nameTwo.style.opacity = "0";
            nameOne.style.opacity = "1";
        }
    }
    else
    {   
        if(isCOActive)
        {
            caseOne.style.transform = "scale(0) rotate(45deg)";

            caseThree.style.transform = "scale(1) rotate(45deg)";
            caseThree.style.height = "150px";
            caseThree.style.width = "150px";
            caseThree.style.zIndex = 3;

            isCThreeActive = true;
            isCOActive = false;
            isCTActive = false;

            descOne.style.opacity = "0";
            descTwo.style.opacity = "0";
            descThree.style.opacity = "1";
            descThree.style.marginTop = "-50px";

            nameOne.style.opacity = "0";
            nameTwo.style.opacity = "0";
            nameThree.style.opacity = "1";
        }
        else if(isCThreeActive)
        {
            caseThree.style.transform = "scale(0) rotate(45deg)";

            caseTwo.style.transform = "scale(1) rotate(45deg)";
            caseTwo.style.height = "150px";
            caseTwo.style.width = "150px";
            caseTwo.style.zIndex = 3;
            
            isCTActive = true;
            isCThreeActive = false;
            isCOActive = false;
            
            descTwo.style.opacity = "1";
            descThree.style.opacity = "0";
            descOne.style.opacity = "0";
            descTwo.style.marginTop = "-50px";

            nameThree.style.opacity = "0";
            nameOne.style.opacity = "0";
            nameTwo.style.opacity = "1";
        }
        else if(isCTActive)
        {
            caseTwo.style.transform = "scale(0) rotate(45deg)";

            caseOne.style.transform = "scale(1) rotate(45deg)";
            caseOne.style.height = "150px";
            caseOne.style.width = "150px";
            caseOne.style.zIndex = 3;
            
            isCOActive = true;
            isCTActive = false;
            isCThreeActive = false;

            descOne.style.opacity = "1";
            descThree.style.opacity = "0";
            descTwo.style.opacity = "0";
            descOne.style.marginTop = "50px";

            nameTwo.style.opacity = "0";
            nameThree.style.opacity = "0";
            nameOne.style.opacity = "1";
            
            descTwo.style.marginTop = "100px";
            descThree.style.marginTop = "100px";
        }
    }
}

function Previous()
{

    if(!mobileSlide)
    {
        if(isCOActive)
        {
            JumpValThree = "250px";
            jumpValOne = "250px";
            jumpValTwo = "0px";

            caseOne.style.marginLeft = jumpValOne;
            caseOne.style.height = "100px";
            caseOne.style.width = "100px";
            caseOne.style.zIndex = 2;

            caseThree.style.marginRight = JumpValThree;
            caseThree.style.marginLeft = "0px";
            caseThree.style.height = "100px";
            caseThree.style.width = "100px";
            caseThree.style.zIndex = 1;

            caseTwo.style.marginRight = jumpValTwo;
            caseTwo.style.height = "150px";
            caseTwo.style.width = "150px";
            caseTwo.style.zIndex = 3;
        
            isCTActive = true;
            isCThreeActive = false;
            isCOActive = false;
            
            descTwo.style.opacity = "1";
            descThree.style.opacity = "0";
            descOne.style.opacity = "0";
            descTwo.style.marginTop = "-50px";
            
            nameOne.style.opacity = "0";
            nameTwo.style.opacity = "1";
        }
        else if(isCTActive)
        {
            jumpValTwo = "250px";
            JumpValThree ="0px";
            jumpValOne = "250px";

            caseOne.style.marginLeft = jumpValOne;
            caseOne.style.height = "100px";
            caseOne.style.width = "100px";
            caseOne.style.zIndex = 2;

            caseTwo.style.marginRight = jumpValTwo;
            caseTwo.style.height = "100px";
            caseTwo.style.width = "100px";
            caseTwo.style.zIndex = 1;

            caseThree.style.marginRight= JumpValThree;
            caseThree.style.height = "150px";
            caseThree.style.width = "150px";
            caseThree.style.zIndex = 3;
            
            isCOActive = false;
            isCTActive = false;
            isCThreeActive = true;

            descOne.style.opacity = "0";
            descThree.style.opacity = "1";
            descTwo.style.opacity = "0";
            descThree.style.marginTop = "-50px";

            nameTwo.style.opacity = "0";
            nameThree.style.opacity = "1";
        }
        else if(isCThreeActive)
        {
            JumpValThree ="250px";
            jumpValOne = "0px";

            caseTwo.style.marginRight = jumpValTwo;
            caseTwo.style.height = "100px";
            caseTwo.style.width = "100px";
            caseTwo.style.zIndex = 1;

            caseThree.style.marginLeft = JumpValThree;
            caseThree.style.height = "100px";
            caseThree.style.width = "100px";
            caseThree.style.zIndex = 2;

            caseOne.style.marginLeft = jumpValOne;
            caseOne.style.height = "150px";
            caseOne.style.width = "150px";
            caseOne.style.zIndex = 3;

            isCTActive = false;
            isCThreeActive = false;
            isCOActive = true;

            descOne.style.opacity = "1";
            descThree.style.opacity = "0";
            descTwo.style.opacity = "0";
            descOne.style.marginTop = "50px";

            nameTwo.style.opacity = "0";
            nameThree.style.opacity = "0";
            nameOne.style.opacity = "1"; 

            descTwo.style.marginTop = "100px";
            descThree.style.marginTop = "100px";
        }
        
    }
    else
    {
        if(isCOActive)
        {
            caseOne.style.transform = "scale(0) rotate(45deg)";

            caseTwo.style.transform = "scale(1) rotate(45deg)";
            caseTwo.style.height = "150px";
            caseTwo.style.width = "150px";
            caseTwo.style.zIndex = 3;

            isCThreeActive = false;
            isCOActive = false;
            isCTActive = true;

            descOne.style.opacity = "0";
            descTwo.style.opacity = "1";
            descThree.style.opacity = "0";
            descTwo.style.marginTop = "-50px";

            nameOne.style.opacity = "0";
            nameTwo.style.opacity = "1";
            nameThree.style.opacity = "0";
        }
        else if(isCTActive)
        {
            caseTwo.style.transform = "scale(0) rotate(45deg)";

            caseThree.style.transform = "scale(1) rotate(45deg)";
            caseThree.style.height = "150px";
            caseThree.style.width = "150px";
            caseThree.style.zIndex = 3;
            
            isCOActive = false;
            isCTActive = false;
            isCThreeActive = true;

            descOne.style.opacity = "0";
            descThree.style.opacity = "1";
            descTwo.style.opacity = "0";
            descThree.style.marginTop = "-50px";

            nameTwo.style.opacity = "0";
            nameThree.style.opacity = "1";
            nameOne.style.opacity = "0";
        }
        else if(isCThreeActive)
        {
            caseThree.style.transform = "scale(0) rotate(45deg)";

            caseOne.style.transform = "scale(1) rotate(45deg)";
            caseOne.style.height = "150px";
            caseOne.style.width = "150px";
            caseOne.style.zIndex = 3;
            
            isCTActive = false;
            isCThreeActive = false;
            isCOActive = true;
            
            descTwo.style.opacity = "0";
            descThree.style.opacity = "0";
            descOne.style.opacity = "1";
            descTwo.style.marginTop = "-50px";

            nameThree.style.opacity = "0";
            nameOne.style.opacity = "1";
            nameTwo.style.opacity = "0";

            descTwo.style.marginTop = "100px";
            descThree.style.marginTop = "100px";
        }
        
    }
    
}

