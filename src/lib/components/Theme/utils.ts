

export interface ITheme {
    [key: string]: string;
  }
  
  export interface IThemes {
    [key: string]: ITheme;
  }
  
  export interface IMappedTheme {
    [key: string]: string | null;
  }

  export const mapTheme = (variables: any): any => {
    let newObj = {};
    Object.keys(variables).forEach((key) => {
      newObj[`--color-${key.toString()}`] = variables[key];
    })
    
    return newObj;
  };

  export const applyTheme = (theme: any): void => {
    const themeObject: IMappedTheme = mapTheme(theme);

    if (!themeObject) return;
  
    const root = document.documentElement;
  
    Object.keys(themeObject).forEach((property) => {
      if (property === 'name') {
        return;
      }
  
      root.style.setProperty(property, themeObject[property]);
    });
  };
  export const extend = (
    extending: ITheme,
    newTheme: ITheme
  ): ITheme => {
    return { ...extending, ...newTheme };
  };