
export interface TypographyProps {
    variant?:'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'title1'|'title2'|'title3'|'body1'|'body2'|'label1'|'label2'; 
    level?:'regular' |'medium' |'semibold' | 'bold';
    className?:string;
    children?:React.ReactNode;
}