import react from 'react';
import Git from '../img/Git.png'
import Youtube from '../img/Youtube.png'

export default function Footer(props) {
    return (
        <div className="bbox">
            <div className="FooterTile" style={{marginTop:"5%",marginBottom:"2%",display:"flex",justifyContent:"space-around"}}>
                <a className="atitle">은행소개</a>
                <a className="atitle">영업점안내</a>
                <a className="atitle">고객광장</a>
                <a className="atitle">개인정보처리방침</a>
                <a className="atitle">개인신용정보관리보호</a>
            </div>
            <div className="fIcon">
                    <span>
                       <a href="https://github.com/kanghyungyu3614/Bank"> <img src={Git} style={{width:"4%"}}/> </a>
                    </span>
                <span>
                        <img src={Youtube} style={{width:"4%",marginLeft:"6%"}}/>
                    </span>
            </div>
        </div>
    );
}
