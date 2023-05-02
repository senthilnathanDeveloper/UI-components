import { ChangeEvent } from "react";

export interface CheckboxProps  {
    error?:boolean;
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
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    WithoutIcon?:boolean;

}


export interface CheckboxGroupsProps {
    direction?:'vertical'|'horizontal';
    children?:any;
}