export interface ITheme {
    [key: string]: string;
}
export interface IThemes {
    [key: string]: ITheme;
}
export interface IMappedTheme {
    [key: string]: string | null;
}
export declare const mapTheme: (variables: any) => any;
export declare const applyTheme: (theme: any) => void;
export declare const extend: (extending: ITheme, newTheme: ITheme) => ITheme;