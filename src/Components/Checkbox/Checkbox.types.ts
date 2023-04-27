import { ChangeEvent } from "react";

export interface CheckboxProps  {
    variant?:'primary' |'error';
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
    icon?:boolean;
}