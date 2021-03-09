var checkON=0;
let checkID;



function changeHeight(id){
    if(checkON==1 && checkID!=id)
    {   
        checkON=0
        changeHeight(checkID)
        
    }
    const formDescriptionSize=document.querySelector(id)
      
    if( formDescriptionSize.style.height!="210px" && checkON==0){
    checkON=1
    checkID=id;
    formDescriptionSize.style.cssText="height:210px"
    formDescriptionSize.parentNode.style.cssText="height:460px"
    }else{
        checkON=0
        formDescriptionSize.style.cssText="height:0px"
        formDescriptionSize.parentNode.style.cssText="height:250px"
    }
}