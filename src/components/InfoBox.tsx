import {  type ReactNode } from "react";

type hintBoxprops = {
    mode : 'hint';
    children: ReactNode;
}

type warningBoxProps ={
mode: 'warning';
severity: 'low' | 'medium' | 'high' ;
children: ReactNode;

} 
type InfoBoxProps = hintBoxprops|warningBoxProps;

export default function InfoBox(props:InfoBoxProps){      // info, warning
    const {children, mode}= props;
    if(mode ==="hint" ){
        return(
        <aside className="infoBox infoBox-hint">
            <p>{children}</p>
        </aside>
        );
    }
    
    const {severity} = props;
    return (
        <aside className={`infoBox infoBox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}