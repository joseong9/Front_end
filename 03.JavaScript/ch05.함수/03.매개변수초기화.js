function print(name, count) {
    // if(!count)
    //     count = 0;
    count = count ? count : 0;
    //count = count || 0;
    console.log(`${name}이/가 ${count}개 있습니다`);
}

print('사과', 0);
print('배');