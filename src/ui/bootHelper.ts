/**
 * Helper class for creating bootstrap elements easily.
 */
export function getRow(){
    const row = document.createElement('div');
    row.classList.add("row");        
    return row;
}

export function getContainer(){
    const row = document.createElement('div');
    row.classList.add("container");        
    return row;
}

export function getCol(postFix: string | number){
    const row = document.createElement('div');
    row.classList.add(`col-${postFix}`);        
    return row;
}