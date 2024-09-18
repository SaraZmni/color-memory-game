function _getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}
export function getRandomColors(limit:number){
    const colors: string[] = [];
    const seen = new Set();

    for (let i=0; i < limit; i++){
        let color = _getRandomColor();

        while(seen.has(color)){
            color= _getRandomColor()
        }
        colors.push(color)
    }
    return colors;
}