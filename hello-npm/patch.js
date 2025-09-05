import { basename,dirname } from "path";
let nomeArquivo = basename('.teste.txt')
let filename = basename('/test/something')

let dir = dirname('/test/something')
let diretorio = dirname('/test/something/file.txt')

console.log('nome do arquivo '+nomeArquivo);
console.log('nome do filename '+dir);
console.log('dir '+filename);
console.log('diretorio -> '+diretorio);