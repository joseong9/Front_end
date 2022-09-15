let ret = ''
let size = 7

for(i=1; i <= size; i++){
    for(j=1; j <= size-i; j++ ){
        ret += ' '
    }
    for(k=1; k <= 2*i-1; k++){
        ret += '*'
    }
    ret += '\n'
}

for(i=size-1; i > 0; i--){
    for(j=size; j > i; j-- ){
        ret += ' '
    }
    for(k=1; k <= 2*i-1; k++){
        ret += '*'
    }
    ret += '\n'
}

console.log(ret)