import { LoadDefaultObj } from "./LoadDefaultObj";
import { LoadGLTFObj } from "./LoadGLTFObj";

function creatbtn(text:string,xoffset:number,yoffset:number,div:HTMLDivElement,onclick:(btn:HTMLButtonElement)=>void)
{
    let btn=document.createElement("button");
    btn.style.left=xoffset+"px";
    btn.style.top=yoffset+"px";
    btn.style.position="absolute"
    btn.textContent=text;
    btn.onclick=()=>{
        onclick(btn);
    }
    div.appendChild(btn);
}

window.onload=()=>{
    let div=document.createElement("div");
    document.body.appendChild(div);

    creatbtn("example_001_loadDefaultObj",0,100,div,(btn)=>{
        LoadDefaultObj.run();
        div.hidden=true;
    });

    creatbtn("example_002_loadGltfObj",0,120,div,(btn)=>{
        LoadGLTFObj.run();
        div.hidden=true;
    });
}


