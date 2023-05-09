import { ChangeEvent } from "react";

export interface ToggleProps {
    size?:'sm' | 'lg';
    label?:string;
    disabled?:boolean;
    checked?:boolean;
    defaultChecked?:boolean;
    name?:string;
    value?:any;
    id?:string;
    required?:boolean;
    className?:string;
    withIcon?:boolean;
    withWords?:boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

}